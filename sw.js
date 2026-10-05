// Service worker — Révision BC SUEP
// Incrémente VERSION (v1 -> v2...) si une mise à jour ne s'affiche pas sur le téléphone.
const VERSION = 'v3';
const CACHE = `revision-bc-${VERSION}`;

const PAGES = ['/', '/jeu', '/fiches', '/qcm', '/quiz', '/glossaire'];
const ASSETS = [
  '/style.css',
  '/data.js',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png'
];

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
        return (await caches.match(key)) || (await caches.match('/')) || Response.error();
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
