// Suivi des lacunes : historique des réponses enregistré sur l'appareil (localStorage)
const LAC_KEY = 'bc-lacunes-v1';

const LAC_THEMES = {
  A: 'Régimes de travail',
  B: 'Services supplémentaires',
  C: 'Congés',
  D: 'Astreinte',
  E: 'RPS',
  F: 'TSI',
  G: 'Déontologie',
  H: 'Management',
  I: 'Pratiques professionnelles en intervention'
};
// Onglet de la page des fiches correspondant à chaque thème
const LAC_FICHE = { A: 'temps', B: 'temps', C: 'temps', D: 'temps', E: 'temps', F: 'tsi', G: 'deontologie', H: 'management', I: 'ppi' };

function lacPartie(t) {
  return 'ABCDE'.includes(t) ? 'Temps de travail' : 'TSI et intervention';
}

function lacLoad() {
  try {
    const d = JSON.parse(localStorage.getItem(LAC_KEY));
    if (d && d.q) return d;
  } catch (e) {}
  return { q: {}, sessions: 0 };
}

function lacSave(d) {
  try { localStorage.setItem(LAC_KEY, JSON.stringify(d)); } catch (e) {}
}

function lacClear() {
  try { localStorage.removeItem(LAC_KEY); } catch (e) {}
}

// Enregistre les réponses d'un quiz terminé
// nouvelleSession = false : réponse ajoutée à la séance en cours (QCM immédiat, réponse par réponse)
function lacRecord(log, nouvelleSession = true) {
  const d = lacLoad();
  if (nouvelleSession || !d.sessions) d.sessions = (d.sessions || 0) + 1;
  d.last = Date.now();
  log.forEach(x => {
    const r = d.q[x.question] || { ok: 0, ko: 0 };
    r.t = x.t;
    r.correct = x.correctAnswer;
    r.e = x.explanation;
    r.s = x.source || '';
    if (x.ok) {
      r.ok++;
    } else {
      r.ko++;
      r.last = x.userAnswer;
    }
    r.date = Date.now();
    d.q[x.question] = r;
  });
  lacSave(d);
  return d;
}

// Bilan d'un quiz par thème : taux de réussite et thèmes faibles
function lacThemeStats(items) {
  const s = {};
  items.forEach(x => {
    if (!x.t) return;
    s[x.t] = s[x.t] || { t: x.t, ok: 0, ko: 0 };
    if (x.ok) s[x.t].ok++; else s[x.t].ko++;
  });
  return Object.values(s).map(v => {
    v.n = v.ok + v.ko;
    v.pct = Math.round(v.ok / v.n * 100);
    return v;
  }).sort((a, b) => a.pct - b.pct || b.ko - a.ko);
}

// Un thème est « à travailler » s'il a assez de questions et un taux de réussite insuffisant
function lacEstFaible(v) {
  return (v.n >= 3 && v.pct < 70) || (v.ko >= 2 && v.pct < 50);
}

// Questions ratées au moins 2 fois et pas encore maîtrisées (plus d'erreurs que de réussites)
function lacRecurrentes(d) {
  return Object.entries(d.q)
    .filter(([, r]) => r.ko >= 2 && r.ko > r.ok)
    .map(([q, r]) => ({ q, ...r }))
    .sort((a, b) => (b.ko - b.ok) - (a.ko - a.ok) || b.ko - a.ko);
}

// Bilan global de l'historique, par thème
function lacBilanGlobal(d) {
  const items = [];
  Object.values(d.q).forEach(r => {
    for (let i = 0; i < r.ok; i++) items.push({ t: r.t, ok: true });
    for (let i = 0; i < r.ko; i++) items.push({ t: r.t, ok: false });
  });
  return lacThemeStats(items);
}

// « TSI », « TSI et Congés », « TSI, Congés et RPS »
function lacListe(noms) {
  if (noms.length <= 1) return noms.join('');
  return noms.slice(0, -1).join(', ') + ' et ' + noms[noms.length - 1];
}
