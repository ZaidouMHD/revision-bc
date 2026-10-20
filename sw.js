// Service worker - Révision BC SUEP
// Incrémente VERSION (v1 -> v2...) si une mise à jour ne s'affiche pas sur le téléphone.
const VERSION = 'v11';
const CACHE = `revision-bc-${VERSION}`;

// Chemins relatifs au dossier du site : "/" sur Netlify, "/Site/" sur GitHub Pages
const SCOPE = self.registration.scope;
const BASE = new URL(SCOPE).pathname;
const abs = (p) => new URL(p.replace(/^\//, ''), SCOPE).href;

const PAGES = ['./', 'jeu', 'fiches', 'qcm', 'quiz', 'glossaire'].map(abs);
const ASSETS = [
  'style.css',
  'data.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png'
].map(abs);

// /qcm.html, /qcm/ et /qcm -> même entrée de cache "/qcm"
function pageKey(url) {
  let p = new URL(url, self.location.origin).pathname;
  p = p.replace(/index\.html$/i, '').replace(/\.html$/i, '');
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p || '/';
}

// Une réponse issue d'une redirection ne peut pas servir une navigation : on la "nettoie"
async function clean(res) {
  if (!res.redirected) return res;
  const body = await res.blob();
  return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
}

// Jeu 3D (~11 Mo) : mis en cache à la première visite de /jeu3d/ seulement, pas pour tout le monde.
// La liste est dans jeu3d/fichiers.json : à régénérer quand on ajoute un modèle ou un script.
let jeu3dPromise = null;
function cacheJeu3d() {
  if (!jeu3dPromise) jeu3dPromise = (async () => {
    const cache = await caches.open(CACHE);
    const list = await (await fetch(abs('jeu3d/fichiers.json'), { cache: 'no-cache' })).json();
    for (const url of list.map(abs)) {
      if (!(await cache.match(url))) await (url.endsWith('/') ? cachePage(cache, url) : cache.add(url).catch(() => null));
    }
  })().catch(() => null).finally(() => { jeu3dPromise = null; });
  return jeu3dPromise;
}

async function cachePage(cache, path) {
  try {
    const res = await fetch(path, { cache: 'no-cache' });
    if (res.ok) await cache.put(pageKey(path), await clean(res));
  } catch (e) { /* hors ligne pendant l'installation : ignoré */ }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all([
      ...PAGES.map((p) => cachePage(cache, p)),
      ...ASSETS.map((a) => cache.add(a).catch(() => null))
    ]);
    await self.skipWaiting();
  })());
});

// La page du jeu 3D le demande aussi elle-même (utile à la toute première visite)
self.addEventListener('message', (event) => { if (event.data === 'cache-jeu3d') event.waitUntil(cacheJeu3d()); });

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('cloudflareinsights')) return; // statistiques : jamais en cache
  // Radios en direct (flux sans fin) et lectures partielles : jamais en cache, le navigateur s'en charge
  if (req.destination === 'audio' || req.destination === 'video' || req.headers.has('range')) return;
  if (req.mode === 'navigate' && url.origin === self.location.origin && url.pathname.startsWith(BASE + 'jeu3d')) event.waitUntil(cacheJeu3d());

  // Pages : réseau d'abord (toujours à jour), cache si pas de réseau
  if (req.mode === 'navigate') {
    const key = pageKey(req.url);
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok && url.origin === self.location.origin) {
          const copy = await clean(res.clone());
          (await caches.open(CACHE)).put(key, copy);
        }
        return res.redirected ? clean(res) : res;
      } catch (e) {
        return (await caches.match(key)) || (await caches.match(pageKey(SCOPE))) || Response.error();
      }
    })());
    return;
  }

  // style.css, data.js et pages lues par le jeu (fiches) : réseau d'abord pour rester à jour
  const isCode = url.origin === self.location.origin && (/\.(css|js|html)$/i.test(url.pathname) || !/\.[a-z0-9]+$/i.test(url.pathname));

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = (await cache.match(req, { ignoreSearch: isCode })) || (isCode ? await cache.match(pageKey(req.url)) : null);
    const network = fetch(req).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    });
    if (isCode) return network.catch(() => cached || Response.error());
    // Images et le reste : cache d'abord (rapide), rafraîchi en arrière-plan
    if (cached) { event.waitUntil(network.catch(() => null)); return cached; }
    return network.catch(() => Response.error());
  })());
});
