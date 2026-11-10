// Mode sombre : bouton 🌙 / ☀️ sur toutes les pages, choix gardé sur l'appareil
(function () {
  const KEY = 'bc-theme';
  let pref = null;
  try { pref = localStorage.getItem(KEY); } catch (e) {}
  const sombre = pref ? pref === 'sombre'
    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Inversion des couleurs de la page (fonctionne aussi avec les styles écrits dans le HTML),
  // les images et vidéos sont ré-inversées pour garder leurs vraies couleurs.
  const css = `
    html.sombre { filter: invert(0.92) hue-rotate(180deg); background: #fff; }
    html.sombre img, html.sombre video, html.sombre picture, html.sombre canvas,
    html.sombre iframe, html.sombre .no-invert { filter: invert(1) hue-rotate(180deg); }
    /* Bandeaux déjà foncés (en-tête, menu, pied de page, résultat) : gardés dans leurs vraies couleurs */
    html.sombre body > header, html.sombre nav.nav, html.sombre body > footer, html.sombre .qcm-bar,
    html.sombre .score-box { filter: invert(1) hue-rotate(180deg); }
    html.sombre body > header img, html.sombre nav.nav img, html.sombre .score-box img { filter: none; }
    html.sombre body { background: #eef1f6 !important; }
    #themeToggle { position: fixed; right: 12px; bottom: 80px; z-index: 2000; width: 44px; height: 44px;
      border-radius: 50%; border: 2px solid #00238a; background: #fff; color: #00238a; font-size: 20px;
      cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.25); display: flex; align-items: center; justify-content: center; padding: 0; }
    @media print {
      html.sombre { filter: none !important; }
      html.sombre img, html.sombre video, html.sombre canvas { filter: none !important; }
      #themeToggle { display: none !important; }
    }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  document.documentElement.classList.toggle('sombre', !!sombre);

  function majBouton(btn) {
    const on = document.documentElement.classList.contains('sombre');
    btn.textContent = on ? '☀️' : '🌙';
    btn.title = on ? 'Passer en mode clair' : 'Passer en mode sombre';
    btn.setAttribute('aria-label', btn.title);
  }

  function ajouterBouton() {
    if (document.getElementById('themeToggle')) return;
    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.type = 'button';
    btn.onclick = function () {
      const on = document.documentElement.classList.toggle('sombre');
      try { localStorage.setItem(KEY, on ? 'sombre' : 'clair'); } catch (e) {}
      majBouton(btn);
    };
    majBouton(btn);
    document.body.appendChild(btn);
  }

  if (document.body) ajouterBouton();
  else document.addEventListener('DOMContentLoaded', ajouterBouton);
})();
