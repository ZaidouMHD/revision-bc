# Récupère les signalements envoyés depuis le site (relais ntfy.sh),
# les ajoute à signalements/signalements.json et regénère signalements/README.md
import json
import sys
import urllib.request
from collections import Counter
from datetime import datetime, timezone

topic, base = sys.argv[1], sys.argv[2]
fichier_json = f'{base}/signalements.json'
fichier_md = f'{base}/README.md'

try:
    with open(fichier_json, encoding='utf-8') as f:
        tous = json.load(f)
except FileNotFoundError:
    tous = []
connus = {s.get('id') for s in tous}

url = f'https://ntfy.sh/{topic}/json?poll=1&since=all'
req = urllib.request.Request(url, headers={'User-Agent': 'revision-bc-signalements'})
with urllib.request.urlopen(req, timeout=60) as r:
    lignes = r.read().decode('utf-8').splitlines()

nouveaux = 0
for ligne in lignes:
    if not ligne.strip():
        continue
    ev = json.loads(ligne)
    if ev.get('event') != 'message' or ev.get('id') in connus:
        continue
    try:
        sig = json.loads(ev.get('message', ''))
    except ValueError:
        continue
    if not isinstance(sig, dict) or not sig.get('motif') or not sig.get('question'):
        continue
    sig = {k: str(sig.get(k, ''))[:2000] for k in ['motif', 'raison', 'question', 'reponse', 'theme', 'page']}
    sig['id'] = ev['id']
    sig['date'] = datetime.fromtimestamp(ev.get('time', 0), timezone.utc).strftime('%d/%m/%Y %H:%M')
    sig['t'] = ev.get('time', 0)
    tous.append(sig)
    connus.add(ev['id'])
    nouveaux += 1

tous.sort(key=lambda s: s.get('t', 0), reverse=True)
with open(fichier_json, 'w', encoding='utf-8') as f:
    json.dump(tous, f, ensure_ascii=False, indent=1)


def cellule(txt):
    return str(txt).replace('|', '/').replace('\n', ' ').strip()


motifs = Counter(s['motif'] for s in tous)
out = ['# Signalements des questions', '',
       'Signalements envoyés par les utilisateurs du site avec le bouton « ⚑ Signaler cette question ».',
       'Mis à jour automatiquement plusieurs fois par jour. Les plus récents en premier.', '']
if not tous:
    out.append('Aucun signalement pour l\'instant.')
else:
    out += [f'**{len(tous)} signalement(s)** : ' + ' · '.join(f'{m} : {n}' for m, n in motifs.most_common()), '',
            '| Date (UTC) | Motif | Thème | Question | Réponse du site | Raison | Page |',
            '|---|---|---|---|---|---|---|']
    for s in tous:
        out.append('| ' + ' | '.join(cellule(s[k]) for k in ['date', 'motif', 'theme', 'question', 'reponse', 'raison', 'page']) + ' |')
with open(fichier_md, 'w', encoding='utf-8') as f:
    f.write('\n'.join(out) + '\n')
print(nouveaux, 'nouveau(x) signalement(s),', len(tous), 'au total')
