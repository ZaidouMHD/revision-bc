# Transforme l'export CSV du formulaire de signalement en une liste lisible (README.md)
import csv
import sys
from collections import Counter

src, dest = sys.argv[1], sys.argv[2]
with open(src, encoding='utf-8') as f:
    lignes = list(csv.DictReader(f))


def champ(ligne, *noms):
    # Retrouve une colonne du formulaire par le début de son intitulé
    for cle, val in ligne.items():
        if cle and any(cle.strip().lower().startswith(n) for n in noms):
            return (val or '').strip()
    return ''


def cellule(txt):
    return txt.replace('|', '/').replace('\n', ' ').strip()


lignes.reverse()  # les plus récents en premier
motifs = Counter(champ(l, 'motif') for l in lignes)

out = ['# Signalements des questions', '',
       'Signalements envoyés par les utilisateurs du site avec le bouton « ⚑ Signaler cette question ».',
       'Mis à jour automatiquement chaque jour. Les plus récents en premier.', '',
       f'**{len(lignes)} signalement(s)** : ' + ' · '.join(f'{m or "sans motif"} : {n}' for m, n in motifs.most_common()), '',
       '| Date | Motif | Thème | Question | Réponse du site | Raison |',
       '|---|---|---|---|---|---|']
for l in lignes:
    out.append('| ' + ' | '.join(cellule(x) for x in [
        champ(l, 'horodateur', 'timestamp', 'date'),
        champ(l, 'motif'),
        champ(l, 'thème', 'theme'),
        champ(l, 'question'),
        champ(l, 'réponse', 'reponse', 'bonne réponse'),
        champ(l, 'raison'),
    ]) + ' |')

with open(dest, 'w', encoding='utf-8') as f:
    f.write('\n'.join(out) + '\n')
print(len(lignes), 'signalement(s)')
