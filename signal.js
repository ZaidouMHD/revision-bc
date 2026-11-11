// « Signaler cette question » : les signalements des collègues sont envoyés à un relais (ntfy.sh),
// puis recopiés dans le dépôt GitHub (dossier signalements/) par une action automatique.
const SIGNAL_CONFIG = {
  relais: 'https://ntfy.sh/revision-bc-signal-7ff63c90d526845c'
};

const SIGNAL_MOTIFS = ['Question mal posée', 'Article ou source erroné', 'Réponse fausse', 'Autre'];
const SIGNAL_LOCAL = 'bc-signalements-v1';
const signalRegistre = [];

// Petit lien affiché sous l'explication : « ⚑ Signaler cette question »
function lienSignal(info) {
  const i = signalRegistre.push(info) - 1;
  return `<span class="signal-zone"><a class="signal-lien" onclick="event.stopPropagation(); ouvrirSignal(${i})">⚑ Signaler cette question</a></span>`;
}

function signalStyle() {
  if (document.getElementById('signalStyle')) return;
  const st = document.createElement('style');
  st.id = 'signalStyle';
  st.textContent = `
    .signal-zone { display: block; margin-top: 8px; text-align: right; }
    .signal-lien { font-size: 12px; color: #8a6d3b; text-decoration: underline; cursor: pointer; }
    .signal-fond { position: fixed; inset: 0; z-index: 3000; background: rgba(0,0,0,.5); display: flex; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 30px 12px; }
    .signal-boite { background: #fff; color: #222; border-radius: 10px; max-width: 520px; width: 100%; padding: 18px; box-shadow: 0 8px 30px rgba(0,0,0,.3); font-size: 15px; }
    .signal-boite h3 { margin: 0 0 6px; color: #003366; font-size: 18px; }
    .signal-boite .sq { background: #f4f6fa; border-radius: 6px; padding: 8px 10px; font-size: 13px; margin-bottom: 12px; }
    .signal-boite label.m { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border: 2px solid #dde3ee; border-radius: 6px; margin-bottom: 6px; cursor: pointer; }
    .signal-boite label.m:has(input:checked) { border-color: #003366; background: #e8edfb; }
    .signal-boite textarea { width: 100%; min-height: 90px; margin-top: 8px; padding: 8px; border: 2px solid #dde3ee; border-radius: 6px; font: inherit; font-size: 14px; box-sizing: border-box; }
    .signal-boite .err { color: #c62828; font-size: 13px; min-height: 18px; margin-top: 4px; }
    .signal-boite .act { display: flex; gap: 8px; justify-content: flex-end; margin-top: 10px; flex-wrap: wrap; }
    .signal-boite .act button { font: inherit; font-size: 14px; border-radius: 6px; padding: 8px 14px; cursor: pointer; border: 2px solid #003366; background: #fff; color: #003366; }
    .signal-boite .act button.ok { background: #003366; color: #fff; }
  `;
  document.head.appendChild(st);
}

function ouvrirSignal(i) {
  signalStyle();
  const info = signalRegistre[i];
  if (!info) return;
  fermerSignal();
  const fond = document.createElement('div');
  fond.className = 'signal-fond';
  fond.id = 'signalFond';
  fond.onclick = e => { if (e.target === fond) fermerSignal(); };
  fond.innerHTML = `<div class="signal-boite" role="dialog" aria-label="Signaler cette question">
    <h3>⚑ Signaler cette question</h3>
    <div class="sq">${info.question}</div>
    <div style="margin-bottom:6px;font-weight:600">Quel est le problème ?</div>
    ${SIGNAL_MOTIFS.map((m, k) => `<label class="m"><input type="radio" name="signalMotif" value="${m}"${k === 0 ? '' : ''}> ${m}</label>`).join('')}
    <div style="margin-top:10px;font-weight:600">Explique la raison (obligatoire)</div>
    <textarea id="signalRaison" placeholder="Ex. : la bonne réponse est X selon l'article Y du guide…"></textarea>
    <div class="err" id="signalErr"></div>
    <div class="act">
      <button type="button" onclick="fermerSignal()">Annuler</button>
      <button type="button" class="ok" onclick="envoyerSignal(${i})">Envoyer le signalement</button>
    </div>
  </div>`;
  document.body.appendChild(fond);
}

function fermerSignal() {
  const f = document.getElementById('signalFond');
  if (f) f.remove();
}

function envoyerSignal(i) {
  const info = signalRegistre[i];
  const motif = (document.querySelector('input[name="signalMotif"]:checked') || {}).value;
  const raison = (document.getElementById('signalRaison').value || '').trim();
  const err = document.getElementById('signalErr');
  if (!motif) { err.textContent = 'Choisis un motif.'; return; }
  if (raison.length < 10) { err.textContent = 'Explique la raison en quelques mots (10 caractères minimum).'; return; }

  const sig = {
    date: new Date().toISOString(),
    motif, raison,
    question: info.question.replace(/<[^>]+>/g, ''),
    reponse: String(info.reponse || '').replace(/<[^>]+>/g, ''),
    theme: info.theme || '',
    page: location.pathname.split('/').pop() || 'index.html'
  };

  // Copie locale (utile si l'envoi échoue ou n'est pas encore configuré)
  try {
    const l = JSON.parse(localStorage.getItem(SIGNAL_LOCAL) || '[]');
    l.push(sig);
    localStorage.setItem(SIGNAL_LOCAL, JSON.stringify(l.slice(-200)));
  } catch (e) {}

  const boite = document.querySelector('.signal-boite');
  const fin = msg => {
    boite.innerHTML = `<h3>Merci !</h3><p>${msg}</p><div class="act"><button type="button" class="ok" onclick="fermerSignal()">Fermer</button></div>`;
  };

  if (!SIGNAL_CONFIG.relais) { fin("Ton signalement est enregistré sur cet appareil."); return; }
  const envoi = { motif: sig.motif, raison: sig.raison, question: sig.question, reponse: sig.reponse, theme: sig.theme, page: sig.page };
  fetch(SIGNAL_CONFIG.relais, { method: 'POST', body: JSON.stringify(envoi) })
    .then(r => { if (!r.ok) throw new Error(r.status); })
    .then(() => fin('Ton signalement a bien été envoyé. La question sera vérifiée.'))
    .catch(() => fin("L'envoi a échoué (pas de connexion ?). Ton signalement est gardé sur cet appareil."));
}
