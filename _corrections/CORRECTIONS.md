# Corrections apportées au site - Site V2

Ce document liste toutes les modifications faites aux questions QCM/Quiz et au glossaire, à partir de tes fiches (considérées comme la référence) et des PDF du dossier REVISION CHEF. Tes PDF n'ont pas été modifiés.

## Résumé

- Questions QCM/Quiz vérifiées : 416 (toutes)
- Questions corrigées : 27
- Questions incertaines (laissées inchangées, à vérifier par toi) : 11
- Définitions du glossaire corrigées : 16 (+ 13 incertaines)

## Bugs structurels corrigés (en plus du contenu)

- Le thème "I – Pratiques Professionnelles en Intervention" (114 questions, le plus gros lot) n'avait AUCUN bouton de filtre dans le QCM - il existait dans les données mais était injoignable sauf via "Tous". Ajouté.
- Les liens de navigation vers `maintenance.html` (accueil, fiches) ont été remplacés par les vrais liens `qcm.html` / `quiz.html` / `glossaire.html`, maintenant que le contenu est vérifié.
- Le `<title>` de `glossaire.html` affichait "Fiches - Brigadier-Chef 2026" (copié-collé resté de fiches.html) → corrigé en "Glossaire - Brigadier-Chef 2026".
- L'attribut HTML cassé sur le lien "Glossaire" dans la nav de `glossaire.html` a été réparé.
- Les fiches TSI, Déontologie, Management et PPI ont été refondues visuellement dans le même style "cartes avec sources" que la fiche Temps de travail (tout le contenu factuel d'origine a été conservé, seul le format a changé).

## Corrections QCM / Quiz

### [Temps de travail] idx 62
**Avant :** Combien de jours max d'ASA pour enfant malade pour un agent à temps plein ?

**Après :** Combien de jours max d'ASA pour enfant malade pour un agent à temps plein ?

- Bonne réponse avant : 1 → après : 0
- Explication avant : 12 jours par an pour un agent à temps plein (6 jours à 50% du temps de travail).
- Explication après : 6 jours par an pour un agent à temps plein en régime hebdomadaire (obligations hebdomadaires de service + 1 jour). Ce nombre peut être porté à 12 jours si l'agent assume seul la charge de l'enfant ou si le conjoint ne bénéficie d'aucun jour à ce titre. (Source : guide règles TT.pdf)
- **Raison :** Le guide règles TT.pdf indique explicitement '6 jours' pour un agent à temps plein en régime hebdomadaire (formule : obligations hebdomadaires + 1 jour) ; 12 jours correspond en réalité au cas doublé (agent seul avec l'enfant ou conjoint sans droit), pas au cas général. La bonne réponse et l'explication ont été corrigées. Source : guide règles TT.pdf.

### [Temps de travail] idx 76
**Avant :** Combien de jours d'ARTT bénéficie un agent en cycle continu en exécution ?

**Après :** Combien de jours d'ARTT bénéficie un agent en cycle continu en exécution ?

- Bonne réponse avant : 1 → après : 2
- Explication avant : Un agent CC exécution bénéficie de 19 jours d'ARTT dont 3 indemnisés. (Source : Arrêté 5 sept. 2019)
- Explication après : Un agent du corps de commandement (CC) en fonction d'exécution (hors article 10) bénéficie de 29 jours d'ARTT dont 8 indemnisés, en régime hebdomadaire à 40h30. (Source : Arrêté du 5 septembre 2019, art. 22)
- **Raison :** Inversion avec la question sur le CC 'commandement' (idx 77). L'article 22 de l'arrêté du 5 septembre 2019 (régime hebdomadaire 40h30) attribue 19 jours d'ARTT dont 3 indemnisés aux CC relevant de l'article 10 du décret du 25.08.2000 (fonctions de commandement/direction, regroupés avec les CCD), et 29 jours dont 8 indemnisés aux autres personnels du CC (fonction d'exécution, hors article 10). Les deux questions avaient les valeurs interverties.

### [Temps de travail] idx 77
**Avant :** Combien de jours d'ARTT bénéficie un agent en cycle continu en commandement ?

**Après :** Combien de jours d'ARTT bénéficie un agent en cycle continu en commandement ?

- Bonne réponse avant : 2 → après : 0
- Explication avant : Un agent CC commandement bénéficie de 29 jours d'ARTT dont 8 indemnisés. (Source : Arrêté 5 sept. 2019)
- Explication après : Un agent du corps de commandement (CC) en fonction de commandement (relevant de l'article 10 du décret du 25 août 2000, comme les CCD) bénéficie de 19 jours d'ARTT dont 3 indemnisés, en régime hebdomadaire à 40h30. (Source : Arrêté du 5 septembre 2019, art. 22)
- **Raison :** Inversion avec la question sur le CC 'exécution' (idx 76) - voir le même article 22 de l'arrêté du 5 septembre 2019 : les CC relevant de l'article 10 (fonctions de commandement, regroupés avec les CCD) ont 19 jours d'ARTT dont 3 indemnisés, et non 29.

### [TSI] idx 129
**Avant :** Dans quel cas l'usage des armes est-il autorisé en maintien de l'ordre selon le CSI ?

**Après :** Dans quel cas l'usage des armes est-il autorisé en maintien de l'ordre selon le CSI ?

- Explication avant : L'usage des armes est autorisé après deux sommations à haute voix inefficaces (Art. L434-13 CPP).
- Explication après : L'usage des armes en maintien de l'ordre est autorisé après deux sommations à haute voix demeurées sans effet, notamment en cas d'attroupement (Art. L.211-9 CSI), ou dans les cas de défense des lieux occupés / individu en fuite prévus par l'Art. L.435-1 CSI.
- **Raison :** L'explication citait un article inexistant (« Art. L434-13 CPP »). La base légale correcte pour les deux sommations en maintien de l'ordre est l'Art. L.211-9 du CSI (dissipation d'un attroupement) et/ou l'Art. L.435-1 CSI (défense des lieux/individu en fuite), conformément à la fiche section 1.3.

### [TSI] idx 162
**Avant :** Quel est le rôle de l'armurerie centrale dans la gestion des armes ?

**Après :** Quel est le rôle de l'armurerie centrale dans la gestion des armes ?

- Options avant : ["Vendre des armes aux policiers","Contrôler les TSUA et gérer les armes de service","Former les policiers au tir","Sanctionner les policiers"]
- Options après : ["Vendre des armes aux policiers","Gérer, entretenir et assurer la traçabilité des armes de service (stockage sécurisé, distribution, maintenance)","Former les policiers au tir","Sanctionner les policiers"]
- Explication avant : L'**armurerie centrale** a pour rôle de **contrôler les TSUA et de gérer les armes de service**, en assurant leur maintenance et leur traçabilité.
- Explication après : L'armurerie centrale a pour rôle de gérer, entretenir et assurer la traçabilité des armes de service (stockage en lieu sécurisé, distribution, maintenance), notamment pour les armes collectives conformément à l'Art. 114-8 du RGEPN. Le contrôle et la validation des déclarations TSUA relèvent de la voie hiérarchique (visa du chef de service), pas de l'armurerie.
- **Raison :** L'armurerie centrale ne « contrôle » pas les déclarations TSUA (cette validation relève du chef de service/hiérarchie, cf. fiche mémo TSUA) ; son rôle réel porte sur la gestion, l'entretien et la traçabilité matérielle des armes (stockage, distribution), conformément à l'Art. 114-8 du RGEPN sur les armes collectives.

### [TSI] idx 173
**Avant :** Quel document doit être rempli en cas d'usage d'une arme selon le RGEPN ?

**Après :** Quel document/traitement doit être renseigné en cas d'usage d'une arme ?

- Options avant : ["Un rapport d'incident.","Un compte-rendu d'intervention (CRI) ou un procès-verbal.","Une simple déclaration orale.","Aucun document n'est nécessaire."]
- Options après : ["Un rapport d'incident.","Une déclaration via le TSUA (Traitement relatif au Suivi de l'Usage des Armes).","Une simple déclaration orale.","Aucun document n'est nécessaire."]
- Explication avant : Tout usage d'arme doit faire l'objet d'un <strong>compte-rendu d'intervention (CRI) ou d'un procès-verbal</strong>, conformément aux règles de traçabilité du RGEPN.
- Explication après : Tout usage volontaire ou accidentel d'une arme doit faire l'objet d'une déclaration sans délai via le TSUA (Traitement relatif au Suivi de l'Usage des Armes), qui se substitue aux anciennes formalités déclaratives et est ensuite visée par le chef de service.
- **Raison :** Le RGEPN (art. 113-4 à 114-8) ne mentionne aucun « compte-rendu d'intervention (CRI) » ou « procès-verbal » pour l'usage d'une arme. Le mécanisme réellement prévu (section 2 de la fiche + fiche mémo TSUA) est la déclaration obligatoire via le TSUA.

### [TSI] idx 177
**Avant :** Quelle est la portée maximale efficace du LBD selon le RGEPN ?

**Après :** Quelle est la portée efficace du LBD (Lanceur de Balles de Défense) ?

- Options avant : ["10 mètres.","50 mètres (tir tendu), 100 mètres (tir courbe).","200 mètres.","1000 mètres."]
- Options après : ["10 mètres.","50 mètres.","200 mètres.","1000 mètres."]
- Explication avant : La portée efficace du LBD est de <strong>50 mètres en tir tendu</strong> et <strong>100 mètres en tir courbe</strong>, selon les règles du RGEPN.
- Explication après : La portée efficace du LBD (Lanceur de Balles de Défense) est de 50 mètres, selon le tableau synthétique des armes. Cette caractéristique balistique ne provient pas du RGEPN, qui n'encadre pas les spécifications techniques des armes.
- **Raison :** La fiche (tableau synthétique des armes, section 2) indique une portée efficace de 50 m pour le LBD, sans distinction tir tendu/tir courbe. La précision « 100 mètres en tir courbe » n'est corroborée par aucune source disponible et contredisait la fiche. L'attribution au RGEPN était également erronée : ce texte ne traite pas des caractéristiques balistiques.

### [Déontologie] idx 180
**Avant :** Quel texte fondateur encadre principalement la déontologie des policiers et gendarmarmes en France ?

**Après :** Quel texte fondateur encadre principalement la déontologie des policiers et gendarmarmes en France ?

- Options avant : ["Le Code pénal","Le Code de la sécurité intérieure (CSI) - art. R. 434-1 à R. 434-21","Le Code du travail","La Constitution de 1958"]
- Options après : ["Le Code pénal","Le Code de la sécurité intérieure (CSI) - art. R. 434-2 à R. 434-30","Le Code du travail","La Constitution de 1958"]
- Explication avant : Le texte fondateur principal est le Code de déontologie intégré dans le Code de la sécurité intérieure (CSI), notamment aux articles R. 434-1 à R. 434-21. Ce code synthétise les règles déontologiques et crée des obligations spécifiques pour les policiers et gendarmarmes.
- Explication après : Le texte fondateur principal est le Code de déontologie intégré dans le Code de la sécurité intérieure (CSI), aux articles R. 434-2 à R. 434-30 (règles communes police/gendarmerie). Ce code synthétise les règles déontologiques et crée des obligations spécifiques pour les policiers et gendarmes.
- **Raison :** L'option et l'explication citaient un intervalle d'articles erroné (R.434-1 à R.434-21). La fiche (Fiche 2) montre que le code de déontologie couvre les articles R.434-2 à R.434-30 (le code ne comporte pas d'article R.434-1 ; confirmé par code_deontologie commenté.pdf qui débute à l'article R.434-2).

### [Déontologie] idx 184
**Avant :** Quelle sanction disciplinaire maximale peut être prononcée contre un policier pour manquement grave ?

**Après :** Quelle sanction disciplinaire maximale peut être prononcée contre un policier pour manquement grave ?

- Explication avant : La révocation (Art. R. 434-27 CSI) est la sanction disciplinaire maximale. Elle consiste à mettre fin aux fonctions de l'agent et peut être assortie d'une interdiction de réintégration dans la fonction publique.
- Explication après : La révocation est la sanction disciplinaire la plus grave (4e groupe des sanctions prévues par le statut général de la fonction publique). Elle met fin définitivement aux fonctions de l'agent. Tout manquement déontologique expose l'agent à une sanction disciplinaire, indépendamment des sanctions pénales éventuelles (Art. R. 434-27 CSI).
- **Raison :** L'explication attribuait à tort à l'Art. R.434-27 CSI la définition détaillée de la révocation. Cet article pose seulement le principe général (tout manquement expose à une sanction disciplinaire) ; l'échelle des sanctions (avertissement à révocation) relève du statut général de la fonction publique, comme le montre la Fiche 5/7 de la source (groupes de sanctions).

### [Déontologie] idx 185
**Avant :** Quel est le délai maximal pour réaliser un examen médical après une interpellation ayant nécessité l'emploi de la force ?

**Après :** Quel est le délai maximal pour réaliser un examen médical après une interpellation ayant nécessité l'emploi de la force ?

- Explication avant : Un examen médical doit être réalisé le plus rapidement possible après l'interpellation (Art. R. 434-19 CSI). Cet examen vise à vérifier l'absence de blessures et à documenter d'éventuelles violences.
- Explication après : Un examen médical doit être réalisé le plus rapidement possible après une interpellation ayant nécessité l'emploi de la force, afin de constater d'éventuelles blessures et de protéger la personne comme l'agent. Cette exigence se rattache au devoir de protection des personnes privées de liberté (Art. R. 434-17 CSI) et aux règles de procédure pénale relatives à la garde à vue, et non à un délai chiffré fixe.
- **Raison :** L'explication citait l'Art. R.434-19 CSI (qui concerne l'assistance aux personnes, cf. Fiche 2) comme fondement de l'examen médical après usage de la force, ce qui est inexact. Ni la fiche ni les PDF sources ne rattachent cette exigence à cet article ; l'article pertinent du CSI est le R.434-17 (protection des personnes privées de liberté), complété par les règles de procédure pénale sur la garde à vue.

### [Déontologie] idx 191
**Avant :** Quel article du CSI définit les manquements disciplinaires des policiers ?

**Après :** Quel article du CSI définit les manquements disciplinaires des policiers ?

- Explication avant : Les manquements disciplinaires sont définis à l'Art. R. 434-27 CSI : blâme, avertissement, rétrogradation, révocation.
- Explication après : L'Art. R. 434-27 CSI dispose que tout manquement du policier ou du gendarme aux règles et principes du code de déontologie l'expose à une sanction disciplinaire, en application des règles propres à son statut, indépendamment des sanctions pénales encourues le cas échéant.
- **Raison :** L'explication affirmait à tort que l'Art. R.434-27 CSI énumère lui-même les sanctions (blâme, avertissement, rétrogradation, révocation). Or cet article pose seulement le principe que tout manquement expose à une sanction disciplinaire ; l'échelle des sanctions relève du statut général de la fonction publique (voir Fiche 5 de la source, tableau des groupes de sanctions).

### [Déontologie] idx 192
**Avant :** Quel est le délai pour contester une sanction disciplinaire devant le Tribunal administratif ?

**Après :** Quel est le délai pour contester une sanction disciplinaire devant le Tribunal administratif ?

- Explication avant : Le recours contentieux devant le Tribunal administratif doit être introduit dans un délai de 2 mois à compter de la notification de la sanction (Art. R. 434-15 CSI).
- Explication après : Le recours contentieux devant le Tribunal administratif doit être introduit dans un délai de 2 mois à compter de la notification de la sanction. Ce délai relève des règles de droit commun du contentieux administratif, et non d'une disposition spécifique du Code de la sécurité intérieure.
- **Raison :** L'explication citait l'Art. R.434-15 CSI comme fondement du délai de recours de 2 mois, alors que cet article traite du port de la tenue (cf. Fiche 2) et n'a aucun rapport avec les délais de recours contentieux. Le délai de 2 mois relève du droit commun du contentieux administratif, comme l'indique la Fiche 5 de la source (« Recours contentieux devant le juge administratif dans les 2 mois ») sans référence à un article spécifique du CSI.

### [Déontologie] idx 193
**Avant :** Quel est le principe selon lequel un policier doit éviter tout conflit entre ses intérêts personnels et ses fonctions ?

**Après :** Quel est le principe selon lequel un policier doit éviter tout conflit entre ses intérêts personnels et ses fonctions ?

- Explication avant : La probité (Art. R. 434-9 CSI) impose d'éviter tout conflit entre les intérêts personnels et les fonctions publiques. Tout avantage supérieur à 30€ doit être déclaré.
- Explication après : La probité (Art. R. 434-9 CSI) impose d'éviter tout conflit entre les intérêts personnels et les fonctions publiques : le policier ne peut se prévaloir de sa qualité pour en tirer un avantage personnel, ni solliciter ou accepter un avantage lié à ses fonctions.
- **Raison :** L'explication ajoutait un seuil chiffré (« tout avantage supérieur à 30€ ») introuvable dans la fiche et dans les trois PDF sources fournis. Ce détail non sourcé a été retiré pour ne conserver que ce qui est effectivement établi par l'Art. R.434-9 CSI (Fiche 2 et Fiche 3 de la source).

### [Déontologie] idx 196
**Avant :** Quel est le principe selon lequel un policier doit agir avec dignité et respect dans l'exercice de ses fonctions ?

**Après :** Quel est le principe selon lequel un policier doit agir avec dignité et respect dans l'exercice de ses fonctions ?

- Explication avant : La dignité professionnelle (Art. R. 434-1 CSI) impose à un policier d'agir avec respect et professionnalisme dans l'exercice de ses fonctions.
- Explication après : La dignité professionnelle (Art. R. 434-12 CSI) impose à un policier de ne jamais se départir de sa dignité et d'agir de manière exemplaire dans l'exercice de ses fonctions.
- **Raison :** L'explication citait un « Art. R.434-1 CSI » qui n'existe pas : le code de déontologie commence à l'article R.434-2 (confirmé par code_deontologie commenté.pdf, « Titre préliminaire, Article R.434-2 »). La dignité professionnelle est en réalité définie par l'Art. R.434-12 CSI (Dignité/Exemplarité), conformément à la Fiche 2 et à la Fiche 3 (devoir n°3) de la source.

### [Déontologie] idx 198
**Avant :** Quel article du CSI définit les obligations de neutralité des policiers ?

**Après :** Quel article du CSI définit les obligations de neutralité des policiers ?

- Options avant : ["Art. R. 434-11 CSI","Art. R. 434-9 CSI","Art. R. 434-13 CSI","Art. R. 434-19 CSI"]
- Options après : ["Art. R. 434-11 CSI","Art. R. 434-9 CSI","Art. R. 434-29 CSI","Art. R. 434-19 CSI"]
- Bonne réponse avant : 0 → après : 2
- Explication avant : Les obligations de neutralité sont définies à l'Art. R. 434-11 CSI : obligation de traiter tous les citoyens de manière égale, sans discrimination.
- Explication après : Les obligations de neutralité sont définies à l'Art. R. 434-29 CSI (devoir de réserve) : le policier est tenu à l'obligation de neutralité et s'abstient, dans l'exercice de ses fonctions, de toute expression ou manifestation de ses convictions religieuses, politiques ou philosophiques.
- **Raison :** La fiche (Fiche 2) intitule l'Art. R.434-11 « Impartialité / Neutralité », mais son contenu réel (traitement égal, non-discrimination) ne définit pas l'obligation de neutralité au sens strict. Le texte source (code_deontologie commenté.pdf, Art. R.434-29) montre que l'obligation de neutralité (abstention d'expression de convictions religieuses/politiques/philosophiques) est définie par l'Art. R.434-29 CSI, ce que confirment aussi la Fiche 3 (devoir n°8, « Devoir de réserve/Neutralité ») et la Fiche 4 (manquement n°8, « Neutralité, laïcité et réserve » → R.434-29) de la même source. Un des distracteurs a donc été remplacé par la bonne référence.

### [Déontologie] idx 204
**Avant :** L'enquête administrative est-elle une phase d'investigation qui précède ou qui suit les poursuites disciplinaires ?

**Après :** L'enquête administrative est-elle une phase d'investigation qui précède ou qui suit les poursuites disciplinaires ?

- Options avant : ["Elle suit les poursuites disciplinaires","Elle précède et conditionne les poursuites disciplinaires","Elle se déroule en même temps que l'enquête judiciaire","Elle remplace l'enquête judiciaire"]
- Options après : ["Elle suit les poursuites disciplinaires","Elle précède la procédure disciplinaire, sans en être un préalable obligatoire","Elle se déroule en même temps que l'enquête judiciaire","Elle remplace l'enquête judiciaire"]
- Explication avant : L'enquête administrative constitue une phase d'investigation pré-disciplinaire. Elle conditionne l'ouverture des poursuites disciplinaires. Les droits de la défense (communication du dossier, assistance d'un avocat) ne s'appliquent qu'après l'enquête, lors des poursuites. (Source : guide_enquete administrative.pdf, §1.1.2)
- Explication après : L'enquête administrative constitue une phase d'investigation pré-disciplinaire, dépourvue de tout formalisme préétabli et de pouvoirs coercitifs. Elle précède la procédure disciplinaire mais n'en est pas un préalable obligatoire (CE, 15 mars 2004, Pinon c/ministre de l'intérieur). L'agent enquêté bénéficie déjà, pendant l'enquête, du droit d'être entendu et d'être assisté par une personne de son choix ; seul le droit au silence ne lui est pas reconnu. (Source : guide_enquete administrative.pdf, §1.1.2 et §3.3)
- **Raison :** L'option et l'explication affirmaient que l'enquête administrative « conditionne » les poursuites disciplinaires et que les droits de la défense (assistance) ne s'appliqueraient qu'après l'enquête. Or la Fiche 5 de la source précise explicitement que l'enquête administrative est « le préalable NON obligatoire » à la procédure disciplinaire (CE, 15 mars 2004, Pinon) et que l'agent bénéficie déjà, PENDANT l'enquête, du droit d'être entendu et assisté par une personne de son choix (seul le droit au silence lui est refusé).

### [Déontologie] idx 210
**Avant :** Un policier qui poste sur les réseaux sociaux des informations susceptibles de nuire à l'image de la police commet-il un manquement à l'exemplarité ?

**Après :** Un policier qui poste sur les réseaux sociaux des informations susceptibles de nuire à l'image de la police commet-il un manquement à l'exemplarité ?

- Bonne réponse avant : 1 → après : 2
- **Raison :** Incohérence entre l'index de bonne réponse (a=1, « Oui, mais uniquement en cas de réponse judiciaire ») et l'explication fournie, qui justifie en réalité l'option « Oui, cela porte atteinte au crédit et au renom de l'institution » (Art. R.434-12 CSI, Fiche 4 manquement n°10). L'index de bonne réponse a été corrigé pour correspondre à l'explication et à la source.

### [Management] idx 225
**Avant :** Quel outil permet d'évaluer les risques professionnels dans la police nationale ?

**Après :** Quel outil permet d'évaluer les risques professionnels dans la police nationale ?

- Options avant : ["DUERP","RIME","QVT","PMS"]
- Options après : ["DUERMI","RIME","QVT","PMS"]
- Explication avant : Le DUERP (Document Unique d'Évaluation des Risques Professionnels) permet d'évaluer les risques professionnels.
- Explication après : Le **DUERMI** (outil d'évaluation des risques professionnels du ministère de l'Intérieur, permettant d'élaborer le document unique - DUERP) permet d'évaluer les risques professionnels dans la Police Nationale.
- **Raison :** La fiche de révision utilise systématiquement le terme « DUERMI » (Fiche 4) pour désigner l'outil d'évaluation des risques professionnels propre à la Police Nationale, et non « DUERP ». Option et explication harmonisées avec la terminologie de la fiche pour éviter toute confusion à la révision.

### [Management] idx 229
**Avant :** Quel document doit être élaboré pour évaluer les risques psychosociaux (RPS) dans un service ?

**Après :** Quel document doit être élaboré pour évaluer les risques psychosociaux (RPS) dans un service ?

- Options avant : ["Le DUERP","Le PMS","Le RIME","Le QVT"]
- Options après : ["Le DUERMI","Le PMS","Le RIME","Le QVT"]
- Explication avant : Le DUERP inclut l'évaluation des risques psychosociaux (RPS) et doit être mis à jour annuellement.
- Explication après : Le **DUERMI** inclut l'évaluation des risques psychosociaux (RPS) et doit être mis à jour au moins annuellement (Fiche 4 - GUIDE_SST_OCTOBRE_2025.pdf).
- **Raison :** Idem : harmonisation terminologique avec la fiche (« DUERMI » et non « DUERP »).

### [Management] idx 226
**Avant :** Quel est l'objectif principal du Programme de Management de la Santé (PMS) ?

**Après :** Quel est l'objectif principal du PMS (Programme de Mobilisation contre le Suicide) ?

- Options avant : ["Réduire les absences","Améliorer la qualité de vie au travail","Sanctionner les agents","Augmenter les effectifs"]
- Options après : ["Réduire les absences","Prévenir le suicide chez les policiers","Sanctionner les agents","Augmenter les effectifs"]
- Explication avant : Le **PMS** vise à **améliorer la qualité de vie au travail** et à prévenir les risques psychosociaux.
- Explication après : Le **PMS** signifie **Programme de Mobilisation contre le Suicide**. Il vise à **prévenir le suicide** au sein de la Police Nationale par la détection des signaux de fragilité, l'accompagnement des agents en difficulté et la mobilisation de l'ensemble de la chaîne hiérarchique (Guide_PMS-2023_02_27.pdf).
- **Raison :** Erreur factuelle sur l'acronyme : le PDF source (Guide_PMS-2023_02_27.pdf, page de titre) indique explicitement que PMS = « Programme de Mobilisation contre le Suicide », et non « Programme de Management de la Santé ». Son objectif est la prévention du suicide chez les policiers, pas la QVT en général. Question, options et explication corrigées en conséquence. Remarque : la fiche HTML (Fiche 5) porte la même erreur de nommage (« PMS - Plan Manajemen Service ») ; conformément à la consigne, elle n'a pas été modifiée, seul le QCM a été corrigé sur la base du PDF source.

### [Management] idx 256
**Avant :** Quel est l'objectif du 'Programme de Management de la Santé (PMS)' ?

**Après :** Quel est l'objectif du PMS (Programme de Mobilisation contre le Suicide) ?

- Options avant : ["Réduire les absences","Améliorer la qualité de vie au travail","Sanctionner les manquements","Augmenter les effectifs"]
- Options après : ["Réduire les absences","Prévenir le suicide chez les policiers","Sanctionner les manquements","Augmenter les effectifs"]
- Explication avant : Le **PMS** vise à **améliorer la qualité de vie au travail** et à prévenir les risques psychosociaux.
- Explication après : Le **PMS** signifie **Programme de Mobilisation contre le Suicide**. Il vise à **prévenir le suicide** au sein de la Police Nationale par la détection des signaux de fragilité et l'accompagnement des agents en difficulté (Guide_PMS-2023_02_27.pdf).
- **Raison :** Même erreur que la question __idx 226 (doublon) : PMS = « Programme de Mobilisation contre le Suicide », pas « Programme de Management de la Santé ». Corrigé sur la base du PDF source.

### [Management] idx 240
**Avant :** Quel outil permet de suivre l'évolution des compétences d'une équipe ?

**Après :** Quel outil permet de suivre l'évolution des compétences d'une équipe ?

- Options avant : ["Le RIME","Le DUERMI","Le PMS","Le tableau de suivi"]
- Options après : ["Le RIME","L'entretien professionnel","Le PMS","Le tableau de suivi"]
- Bonne réponse avant : 3 → après : 1
- Explication avant : Le **PMS** (Programme de Management de la Santé) inclut des outils pour suivre l'évolution des compétences et des besoins de formation.
- Explication après : L'**entretien professionnel** permet d'évaluer les performances et de planifier le développement des compétences des agents (Guide-de-l-encadrant-fonction publique.pdf - outils de management).
- **Raison :** Incohérence interne : l'explication d'origine attribuait la réponse au PMS alors que l'index pointait vers « tableau de suivi » (contradiction avec le doublon __idx 250, qui donnait PMS comme bonne réponse). De plus, le PMS est en réalité le Programme de Mobilisation contre le Suicide (voir correction __idx 226), sans rapport avec le suivi des compétences. L'option la moins pertinente a été remplacée par « l'entretien professionnel », outil explicitement identifié par le Guide de l'encadrant pour évaluer les performances et planifier le développement des agents.

### [Management] idx 250
**Avant :** Quel outil permet de suivre l'évolution des compétences d'une équipe ?

**Après :** Quel outil permet de suivre l'évolution des compétences d'une équipe ?

- Options avant : ["Le RIME","Le DUERMI","Le PMS","Le tableau de suivi"]
- Options après : ["Le RIME","L'entretien professionnel","Le PMS","Le tableau de suivi"]
- Bonne réponse avant : 2 → après : 1
- Explication avant : Le **PMS** inclut des outils pour suivre l'évolution des compétences et des besoins de formation.
- Explication après : L'**entretien professionnel** permet d'évaluer les performances et de planifier le développement des compétences des agents (Guide-de-l-encadrant-fonction publique.pdf - outils de management).
- **Raison :** Le PMS (Programme de Mobilisation contre le Suicide, voir correction __idx 226) n'a pas de rapport avec le suivi des compétences d'une équipe. Corrigé au profit de « l'entretien professionnel », en cohérence avec le Guide de l'encadrant et avec la correction apportée au doublon __idx 240.

### [Management] idx 244
**Avant :** Quel principe managérial consiste à donner du sens au travail ?

**Après :** Quel principe managérial consiste à donner du sens au travail ?

- Bonne réponse avant : 3 → après : 2
- Explication avant : La **QVT** (Qualité de Vie au Travail) est le principe managérial qui vise à donner du sens aux missions des agents en alignant les objectifs individuels et collectifs avec la stratégie de l'organisation.
- Explication après : La **communication** est le principe managérial qui permet de **donner du sens à l'action** et aux missions des agents, en expliquant les objectifs et les enjeux du service (Referentiel Management PN ; Guide des principes fondamentaux du management-commandement PN : « la qualité de la communication... contribue à donner du sens à l'action »).
- **Raison :** Erreur factuelle : le Référentiel Management PN et le Guide des principes fondamentaux du management-commandement associent explicitement le fait de « donner du sens à l'action/aux missions » à LA COMMUNICATION, pas à la QVT. L'explication d'origine décrivait d'ailleurs la fixation d'objectifs (alignement objectifs individuels/collectifs et stratégie), pas la QVT, ce qui trahissait déjà l'incohérence. Réponse corrigée sur « La communication ».

### [PPI] idx 376
**Avant :** Que doit faire un primo-intervenant détectant EEI ou arme d'épaule sur personne ?

**Après :** Que doit faire un primo-intervenant détectant EEI ou arme d'épaule sur personne ?

- Options avant : ["Approcher immédiatement pour interpeller","Ignorer et attendre renfort RAID","Appliquer protocole DÉTECTER - SE PROTÉGER - ALERTER/ÉVACUER - RENDRE COMPTE - FIXER - NEUTRALISER","Demander à la personne de poser l'arme calmement"]
- Options après : ["Approcher immédiatement pour interpeller","Ignorer et attendre renfort RAID","Appliquer protocole DÉTECTER - SE PROTÉGER - ALERTER/ÉVACUER - RENDRE COMPTE - FIGER - NEUTRALISER","Demander à la personne de poser l'arme calmement"]
- Explication avant : Protocole complet : DÉTECTER, SE PROTÉGER, ALERTER/ÉVACUER, RENDRE COMPTE, FIXER, NEUTRALISER.
- Explication après : Protocole complet : DÉTECTER, SE PROTÉGER, ALERTER/ÉVACUER, RENDRE COMPTE, FIGER, NEUTRALISER.
- **Raison :** La fiche (ppi-5, fiche 'Détection d'EEI ou arme d'épaule sur personne') et l'instruction DPN-3.1.3 (découverte objet suspect/EEI, 07/07/2017) utilisent le terme FIGER pour ce protocole précis (immobilisation par injonctions), distinct du protocole général tuerie de masse qui utilise FIXER (entraver la manœuvre). La question porte spécifiquement sur EEI/arme d'épaule sur personne : le terme exact est FIGER.

### [PPI] idx 388
**Avant :** Quel est le rôle de Protection dans PLI ?

**Après :** Quel est le rôle de Protection dans PLI ?

- Bonne réponse avant : 0 → après : 1
- **Raison :** Index de bonne réponse erroné : l'explication et la fiche PLI (ppi-6) définissent 'Protection' comme 'Couverture, prévention menace, surveillance secteur' (option 1), pas 'Communiquer avec CIC' (option 0, qui décrit plutôt la fonction Liaison).

### [PPI] idx 399
**Avant :** Quel est rôle police face objet suspect EEI selon MRO ?

**Après :** Quel est rôle police face objet suspect EEI selon MRO ?

- Explication avant : Police : périmètre sécurité (60m min porté, 100m min véhicule), évacuation, attente déminage.
- Explication après : Police : périmètre sécurité (100m minimum à couvert autour d'un objet suspect, 200m minimum à couvert autour d'un véhicule suspect), évacuation, attente déminage.
- **Raison :** L'explication indiquait '60m min porté, 100m min véhicule', ce qui contredit la fiche (ppi-5, fiche 'Objet suspect ou véhicule suspect' : 'Périmètre sécurité : Minimal 200 mètres... autour véhicule suspect') et l'instruction DPN-3.1.3 du 7 juillet 2017 (annexes A et B : 100m minimum à couvert autour d'un objet suspect, 200m minimum à couvert autour d'un véhicule suspect). Les valeurs 60m/100m concernent un cas différent (individu porteur d'une charge explosive sur lui / dans un véhicule), pas l'objet ou le véhicule suspect abandonné visé par cette question.

## Questions incertaines (à vérifier toi-même)

### [Temps de travail] idx 54
**Question (inchangée) :** Maximum de jours de don reçus par bénéficiaire et par an ?

- **Raison de l'incertitude :** Le chiffre de 90 jours max par bénéficiaire et par an n'est confirmé ni par la fiche de révision (qui ne traite pas des dons de jours) ni par les PDF fournis : le guide règles TT.pdf renvoie systématiquement vers une fiche externe « don de jours de repos » qui n'est pas incluse dans les documents disponibles. Question laissée inchangée faute de source vérifiable.

### [Temps de travail] idx 55
**Question (inchangée) :** Délai pour que l'administration informe le bénéficiaire d'un don de jours ?

- **Raison de l'incertitude :** Même limite que idx54 : le délai de 15 jours ouvrables n'est pas confirmé par les sources fournies (fiche de révision muette sur le sujet, guide règles TT.pdf renvoyant vers une fiche externe « don de jours de repos » non fournie). Question laissée inchangée faute de source vérifiable.

### [Temps de travail] idx 121
**Question (inchangée) :** Les RPS sont destinés à quels agents ?

- **Raison de l'incertitude :** Réponse imprécise mais non remplacée faute de meilleure option : le guide règles TT.pdf et la fiche APORTT 10 indiquent explicitement que les RPS sont exclus pour les CCD, les CC relevant de l'article 10, les PATS et les contractuels article 10 - donc PAS 'tous les corps actifs' au sens strict, puisque le CCD et une partie du CC (2 des 3 corps actifs) en sont exclus. Aucune des 3 options proposées ne reflète exactement la règle réelle (bénéficiaires = essentiellement CEA + CC hors art.10) ; l'option 'Les corps actifs uniquement' reste la moins fausse des trois, donc laissée inchangée, mais signalée comme imprécise.

### [TSI] idx 141
**Question (inchangée) :** Quelle est la portée efficace d'une grenade lacrymogène Condor GL-304 ?

- **Raison de l'incertitude :** La fiche indique « Portée efficace : N/A » pour la grenade Condor GL-304 dans le tableau synthétique des armes ; aucune source disponible (fiche ou PDF, y compris le TG DGPN du 02/06/2025 sur le déploiement de la grenade) ne confirme la valeur « 15 à 30 mètres ». Laissé inchangé faute de confirmation, mais à vérifier auprès d'une source technique complémentaire.

### [TSI] idx 145
**Question (inchangée) :** Quelle est la note minimale requise pour réussir un test de tir ?

- **Raison de l'incertitude :** La note minimale « 12/20 » pour réussir un test de tir n'apparaît dans aucune des sources consultées (fiche, arrêté du 27 juillet 2015, instructions DGPN sur l'arme individuelle). Laissé inchangé faute de source permettant de confirmer ou corriger cette valeur.

### [TSI] idx 148
**Question (inchangée) :** Quelle est la durée d'efficacité d'une grenade lacrymogène Condor GL-304 ?

- **Raison de l'incertitude :** Même limitation que la question 141 : aucune source disponible ne confirme la durée d'efficacité « 15 à 30 secondes » de la grenade Condor GL-304 (la fiche ne renseigne pas cette donnée). Laissé inchangé faute de confirmation.

### [TSI] idx 270
**Question (inchangée) :** Parmi ces unités, laquelle relève du premier niveau d'intervention ?

- **Raison de l'incertitude :** La fiche utilise le sigle « U.I.P.S. » pour l'unité de niveau 1, alors que la question utilise « U.L.P.S. (Unité locale de Police Secours) ». Écart mineur de sigle entre la fiche et la question ; la fiche étant la source de vérité et n'étant pas à modifier, la question est laissée inchangée car la bonne réponse (niveau 1) reste correcte.

### [Management] idx 232
**Question (inchangée) :** Quel est le rôle principal d'un référent QVT dans une unité ?

- **Raison de l'incertitude :** Le rôle de « référent QVT » n'est mentionné ni dans la fiche de révision, ni dans aucun des PDF sources fournis (seuls des rôles voisins existent : référent déontologue, référent protection fonctionnelle, référent RH, assistant de prévention...). L'affirmation reste plausible mais n'a pas pu être vérifiée formellement : laissée inchangée par prudence.

### [Management] idx 254
**Question (inchangée) :** Quel principe managérial consiste à favoriser le collectif de travail ?

- **Raison de l'incertitude :** L'attribution de « favoriser le collectif de travail » à la QVT plutôt qu'à la communication ou à la cohésion d'équipe n'est pas clairement tranchée par la fiche ni par les PDF sources (le « collectif de travail » y apparaît surtout associé à la prévention des RPS). L'affirmation n'est pas contredite mais reste incertaine : laissée inchangée par prudence.

### [PPI] idx 400
**Question (inchangée) :** Quels sont distances sécurité minimales EEI instruction TDM ?

- **Raison de l'incertitude :** La fiche (ppi-5) mentionne à deux reprises un périmètre de '200m minimum' pour une personne portant un EEI apparent en zone (fiches 13 et 14), alors que l'instruction officielle DPN-3.1.3 du 7/07/2017 prévoit 60m pour un individu porteur d'une charge explosive et 100m pour un individu dans un véhicule suspect (valeurs différentes de celles pour un objet/véhicule suspect abandonné, 100m/200m). Les deux jeux de chiffres existent réellement mais pour des situations distinctes ; impossible de déterminer avec certitude laquelle est visée par l'intitulé générique de la question sans trancher contre la fiche (source de vérité désignée). Laissé inchangé par prudence.

### [PPI] idx 346
**Question (inchangée) :** Selon l'Instruction DGPN 2014-140-D, la palpation doit-elle être documentée ?

- **Raison de l'incertitude :** L'instruction DGPN/DGGN n°2014-140-D (7 pages, lue intégralement) ne mentionne pas explicitement d'obligation de consigner CHAQUE palpation même en l'absence d'objet découvert (elle prévoit cette consignation pour la fouille de sécurité avec déshabillage, dans l'instruction de 2008 sur le menottage/palpations). La fiche technique DCRF PN 2021 citée n'est pas disponible dans les sources fournies. Le fait n'est ni confirmé ni clairement contredit : laissé inchangé par prudence.



---

# Corrections du Glossaire

- Termes corrigés : 16
- Termes incertains (à vérifier) : 13
- Autres corrections (bugs HTML : titre de page, lien nav cassé) : 1

## Corrections

**ARTT (anciennement listé « RTT »)**
- Avant : RTT | Réduction du Temps de Travail
- Après : ARTT | Aménagement et Réduction du Temps de Travail. Crédit de jours/heures accordé en début d'année civile pour ramener la durée annuelle de travail à 1607 heures. Doit être pris dans l'année civile d'attribution (protégé si posé ≥ 10 jours à l'avance).
- Raison : Corrigé. fiches.html n'emploie jamais le sigle « RTT » (0 occurrence) mais toujours « ARTT » (8 occurrences), confirmé par guide règles TT.pdf (dossier 4 - TEMPS DE TRAVAIL) : « ARTT (Aménagement Réduction Temps Travail) ».

**ASA**
- Avant : Autorisation Spéciale d'Absence
- Après : Autorisations Spéciales d'Absences. Autorisations accordées pour divers motifs (mandat syndical, examen, événement familial, etc.), prises uniquement sur des jours travaillés (pas d'ASA sur un jour de repos).
- Raison : Corrigé. guide règles TT.pdf intitule explicitement la rubrique « AUTORISATIONS SPECIALES D'ABSENCES (ASA) » (pluriel), et précise qu'elles ne sont prises en compte que sur des jours travaillés.

**CET**
- Avant : Compteur Épargne Temps
- Après : Compte Épargne-Temps. Dispositif permettant de reporter des jours de congés ou de repos non pris d'une année sur l'autre (plafond de 60 jours).
- Raison : Corrigé. guide règles TT.pdf et l'arrêté du 5 septembre 2019 emploient systématiquement « compte épargne-temps (CET) », jamais « compteur ».

**Briefité**
- Avant : Principe d'intervention brève et ciblée. L'agent doit intervenir dans un temps optimal tout en maintenant la maîtrise de la situation.
- Après : Principe imposant que toute compression thoracique ou abdominale exercée sur une personne soit la plus courte possible : il est interdit de maintenir une pression prolongée (risque d'asphyxie positionnelle).
- Raison : Corrigé (faux sens). fiches.html (section TSI, tableau des principes de la Note DGPN 2015) définit « Briefité » comme : « Compression thoracique/abdominale la plus courte possible » avec application « Interdiction de maintenir une pression prolongée » - rien à voir avec une intervention brève et ciblée en général.

**Devoir de loyauté**
- Avant : Obligation pour l'agent de soutenir sa hiérarchie, de respecter les instructions et de ne pas entraver le fonctionnement du service.
- Après : Obligation de fidélité à l'institution rattachée à l'obéissance hiérarchique (Art. R.434-5 CSI) : exécuter les ordres réguliers et ne jamais trahir la confiance de l'institution (interdiction de falsifier un procès-verbal ou une main courante, ou de témoigner faussement).
- Raison : Corrigé (imprécis). fiches.html rattache la Loyauté à l'article R.434-5 (« Obéissance / Loyauté ») et l'illustre par des manquements de type falsification de PV, main courante, faux documents, trahison - pas par un devoir général de soutien hiérarchique.

**Attroupement**
- Avant : Groupe de personnes réunies sur la voie publique susceptible de troubler l'ordre public (art. 431-3 CP).
- Après : Tout rassemblement de personnes sur la voie publique ou dans un lieu susceptible de troubler l'ordre public (art. 431-3 CP).
- Raison : Corrigé (définition incomplète). fiches.html cite le texte légal exact de l'art. 431-3 CP : « Tout rassemblement de personnes sur la voie publique OU DANS UN LIEU susceptible de troubler l'ordre public » - la mention « ou dans un lieu » manquait.

**Palpation de sécurité (section TSI)**
- Avant : Fouille sommaire consistant à détecter des objets dangereux portée sur les vêtements extérieurs, autorisée en cas de risque immédiat.
- Après : Mesure administrative de sûreté (Art. R.434-16 CSI) consistant à détecter visuellement et/ou tactilement, sur une personne ou ses effets, tout objet dangereux, dans le but de protéger les policiers, les tiers et la personne contrôlée. Elle ne revêt pas de caractère systématique et doit être justifiée par une dangerosité potentielle.
- Raison : Corrigé (imprécis/incomplet). La version courte de la section TSI ne citait pas le bon fondement juridique et suggérait à tort une autorisation fondée sur un « risque immédiat » ; alignée sur la définition légale (Art. R.434-16 CSI) et sur l'Instruction DGPN 2014-140-D détaillée plus loin dans le même glossaire.

**COP (tableau « Procédure d'emploi des armes », section TSI)**
- Avant : Centre d'Opérations et de Planification. Structure chargée de coordonner les interventions et de centraliser les informations en cas d'emploi d'une arme.
- Après : Commandant des Opérations de Police. Cadre territorialement compétent, désigné immédiatement (par le CIC en situation de crise), qui dirige et coordonne l'ensemble des moyens engagés lors d'une intervention.
- Raison : Corrigé (faux sens contredit ailleurs dans le même glossaire). fiches.html définit systématiquement COP comme « Commandant des opérations de police », y compris dans la section Schéma national d'intervention et la section Tueries de masse du glossaire lui-même ; « Centre d'Opérations et de Planification » n'existe dans aucune source et contredisait les deux autres entrées COP du glossaire.

**PMS**
- Avant : Programme de Management de la Santé. Démarche visant à améliorer la santé physique et mentale des agents, en prévenant les risques psychosociaux (RPS) et en favorisant la qualité de vie au travail (QVT).
- Après : Plan de Management de Service. Plan visant à améliorer l'organisation et le fonctionnement du service (axes : autonomie, reconnaissance, développement professionnel), afin de réduire les facteurs de risque et d'améliorer le bien-être au travail.
- Raison : Corrigé (faux sens). fiches.html (section Management, fiche 5) intitule PMS « Plan Manajemen [sic] Service » et en décrit le contenu (organisation/fonctionnement du service) ; « Programme de Management de la Santé » ne correspond à aucune source.

**RGEPN (section Management)**
- Avant : Règlement Général des Emplois de la Police Nationale. Document décrivant les missions et l'organisation de la Direction des Ressources et des Compétences de la Police Nationale (DRCPN).
- Après : Règlement Général d'Emploi de la Police Nationale (arrêté du 6 juin 2006). Texte réglementaire de référence qui décrit notamment l'organisation de la Police Nationale (DGPN, DRCPN, Préfecture de Police, Police Judiciaire, CRS...) et les missions des directions et services.
- Raison : Corrigé. Le sigle exact, confirmé par fiches.html (section TSI) et par le PDF « RGEPN au 060226.pdf » (Légifrance : arrêté du 6 juin 2006 portant règlement général d'emploi de la police nationale), est « Règlement Général d'Emploi » (singulier), et le contenu décrit par fiches.html couvre plusieurs directions (DGPN, DRCPN, PP, PJ, CRS), pas seulement la DRCPN.

**Probité (Art. R. 434-9 CSI)**
- Avant : Devoir d'intégrité absolue imposant à un policier d'agir avec honnêteté, transparence financière et absence de corruption. Tout avantage supérieur à 30€ doit être déclaré.
- Après : Devoir d'intégrité absolue : le fonctionnaire ne peut prendre aucun intérêt personnel dans une opération dont il a la charge, ni solliciter ou accepter aucun avantage lié à ses fonctions.
- Raison : Corrigé. fiches.html (tableau Art. R.434-2 à R.434-30 et fiche des 8 devoirs) définit la Probité sans jamais mentionner de seuil chiffré de 30€ ; cette précision ne figure dans aucune source et semble fabriquée.

**Protection fonctionnelle (Art. R. 434-7 CSI)**
- Avant : Mécanisme juridique permettant à un policier poursuivi pour des faits liés à son service d'être assisté juridiquement et couvert financièrement pour ses frais de justice.
- Après : Garantie prévue par la loi du 13 juillet 1983 (art. 11) permettant à un agent d'être protégé par l'administration : (1) en cas d'attaques (menaces, violences, injures, diffamations, outrages) subies à l'occasion de ses fonctions, avec réparation du préjudice ; (2) en cas de poursuites pénales pour des faits liés au service, dès lors qu'ils ne constituent pas une faute personnelle détachable du service. Comprend l'assistance juridique et la prise en charge des frais de justice.
- Raison : Corrigé (définition incomplète). La version initiale ne couvrait que le cas de l'agent poursuivi et omettait le cas - pourtant central - de l'agent victime d'une attaque, ainsi que la condition légale d'absence de faute personnelle détachable. Source : circulaire du 5 mai 2008 sur la protection fonctionnelle (dossier 2 - MANAGEMENT/circulaire protection fonctionnelle.pdf).

**Code de la sécurité intérieure (CSI)**
- Avant : ... incluant les règles déontologiques applicables aux policiers et gendarmes (Art. R. 434-1 à R. 434-21).
- Après : ... incluant les règles déontologiques applicables aux policiers et gendarmes (Art. R. 434-1 à R. 434-30).
- Raison : Corrigé. Le tableau complet du code de déontologie dans fiches.html va jusqu'à l'article R.434-30 (Disponibilité), pas R.434-21.

**Blâme**
- Avant : Sanction disciplinaire mineure consistant en un avertissement écrit, pouvant être inscrit au dossier de l'agent.
- Après : Sanction disciplinaire du 1er groupe, distincte de l'avertissement et plus sévère que lui ; elle est inscrite au dossier administratif de l'agent.
- Raison : Corrigé (faux sens). fiches.html liste « Avertissement » et « blâme » comme deux sanctions distinctes du 1er groupe ; le blâme n'est pas un simple synonyme d'« avertissement écrit ».

**Révocation**
- Avant : Sanction disciplinaire maximale, consistant à mettre fin aux fonctions de l'agent. Peut être assortie d'une interdiction de réintégration.
- Après : Sanction disciplinaire maximale (exclusion définitive), consistant à mettre fin aux fonctions de l'agent. Peut être assortie d'une suspension des droits civiques.
- Raison : Corrigé. fiches.html précise : « Exclusion définitive (Révocation avec ou sans suspension de droits civiques...) » - la notion d'« interdiction de réintégration » ne figure pas dans la source.

**Zone contrôlée (tampon)**
- Avant : Périmètre autour zone d'exclusion où [texte tronqué, ligne du tableau non fermée - bug HTML]
- Après : Périmètre situé autour de la zone d'exclusion, à accès filtré. Sert au regroupement des impliqués et des victimes en attente d'évacuation, avec des points de palpation de sécurité à l'entrée.
- Raison : Corrigé (bug + contenu manquant). La dernière ligne du tableau PPI était coupée en plein milieu de phrase et la balise <tr>/<td> n'était jamais refermée (HTML cassé). Complétée avec le texte de fiches.html : « Zone contrôlée (tampon) : Autour zone exclusion, accès filtré. Regroupement impliqués/victimes en attente évacuation. Points palpation sécurité. »

**Impartialité (Art. R. 434-11 CSI)**
- Avant : Obligation de traiter tous les citoyens de manière égale, sans discrimination, et de rester neutre dans les conflits personnels ou professionnels.
- Après : Obligation de traiter toutes les personnes de manière égale, sans distinction fondée sur l'origine, le sexe, la religion, l'orientation sexuelle ou toute autre caractéristique, et d'agir avec objectivité, sans a priori ni discrimination.
- Raison : Précisé. fiches.html définit l'impartialité par la non-discrimination (origine, sexe, religion, orientation sexuelle, etc.) ; la mention de « neutralité dans les conflits personnels ou professionnels » ne figure pas dans la source et relève davantage du devoir de réserve.

## Incertains (à vérifier toi-même)

**CTI**
- Définition actuelle (inchangée) : Compteur de Temps Individualisé
- Raison de l'incertitude : Incertain. Sigle introuvable dans fiches.html et dans les PDF du dossier « 4 - TEMPS DE TRAVAIL » (guide règles TT.pdf, arrêté APORTT du 5/9/2019, fiches APORTT, instruction DGPN-FSPN). Impossible de confirmer ou d'infirmer la définition ; à vérifier par Zay.

**NS**
- Définition actuelle (inchangée) : Nuit Spéciale (service de nuit)
- Raison de l'incertitude : Incertain. Sigle introuvable dans fiches.html ni dans les PDF Temps de Travail identifiables. Aucune source ne corrobore cette définition.

**ICS**
- Définition actuelle (inchangée) : Indemnité pour Confort du Service
- Raison de l'incertitude : Incertain. Sigle introuvable dans fiches.html et dans les PDF Temps de Travail identifiables (aucune occurrence de « indemnité » associée à ICS). À vérifier par Zay - cette définition semble peu plausible.

**IFTS**
- Définition actuelle (inchangée) : Indemnité Forfaitaire pour Travaux Supérieurs
- Raison de l'incertitude : Incertain. Sigle introuvable dans fiches.html et dans les PDF Temps de Travail identifiables fournis pour cette vérification.

**PDH**
- Définition actuelle (inchangée) : Prime dedienstheid Herstel (primes du fonctionnaire)
- Raison de l'incertitude : Incertain - à corriger en priorité. Sigle introuvable dans fiches.html et les PDF identifiables ; la définition mélange des mots qui ne sont pas du français correct (« dedienstheid Herstel » n'a pas de sens identifiable), ce qui suggère une entrée fabriquée/erronée. Laissée inchangée conformément à la consigne (aucune source ne permet de la remplacer par une définition vérifiée), mais fortement recommandé de la faire vérifier ou supprimer.

**Référent QVT**
- Définition actuelle (inchangée) : Agent désigné dans une unité pour identifier les leviers d'amélioration de la QVT et proposer des actions concrètes pour favoriser le bien-être des agents.
- Raison de l'incertitude : Incertain. Terme non trouvé tel quel dans fiches.html ni dans les PDF Management identifiables (Guide_PMS, PMS_NOTE_AUX_ENCADRANTS, Sensibilisation_aux_RPS n'a pas pu être vérifié car fichier scanné sans texte extractible).

**Signal faible**
- Définition actuelle (inchangée) : Indice ou symptôme (stress, absentéisme, conflit) permettant d'identifier une problématique de risques psychosociaux (RPS) ou de management dans une équipe.
- Raison de l'incertitude : Incertain. Terme non trouvé dans fiches.html ; le PDF le plus pertinent (Sensibilisation_aux_RPS.pdf) est un document scanné sans texte extractible, non vérifiable dans le temps imparti.

**CNDS (Commission nationale de déontologie de la sécurité)**
- Définition actuelle (inchangée) : Autorité indépendante chargée de contrôler le respect de la déontologie par les forces de l'ordre et de formuler des recommandations (devenue CNDS en 2011).
- Raison de l'incertitude : Incertain, et probablement incohérent en l'état : la phrase « devenue CNDS en 2011 » ne fait pas sens (l'entrée s'appelle déjà CNDS). Historiquement la CNDS a été supprimée en 2011 (ses missions transférées au Défenseur des droits), pas « devenue CNDS ». Terme absent de fiches.html ; laissé inchangé faute de source PDF identifiable pour trancher, mais à faire vérifier par Zay.

**CNDAD (Commission nationale de déontologie et des affaires disciplinaires)**
- Définition actuelle (inchangée) : Autorité issue de la fusion de la CNDS et de la Commission nationale de discipline, chargée de contrôler la déontologie et de prononcer des sanctions disciplinaires.
- Raison de l'incertitude : Incertain. Sigle et description introuvables dans fiches.html et dans les PDF Déontologie identifiables (code_deontologie commenté.pdf, Manquements dépliant.pdf, guide_enquete administrative.pdf).

**RGPD (Règlement Général sur la Protection des Données)**
- Définition actuelle (inchangée) : Règlement européen encadrant le traitement des données personnelles, applicable aux fichiers policiers (ex : TAJ, FPR) et imposant des obligations strictes de confidentialité.
- Raison de l'incertitude : Incertain. « RGPD » n'apparaît dans aucune des sources fournies (fiches.html et PDF Déontologie identifiables).

**Référent déontologue**
- Définition actuelle (inchangée) : Agent désigné dans une unité pour conseiller, former et recueillir les signalements de manquements déontologiques auprès des collègues.
- Raison de l'incertitude : Incertain. Terme non trouvé dans fiches.html ni dans les PDF Déontologie identifiables.

**Référent RGPD**
- Définition actuelle (inchangée) : Agent chargé de veiller au respect du RGPD dans le traitement des données personnelles par les policiers et de former les agents sur les bonnes pratiques.
- Raison de l'incertitude : Incertain. Terme non trouvé dans fiches.html ni dans les PDF Déontologie identifiables.

**Fichiers de données personnelles**
- Définition actuelle (inchangée) : Fichiers policiers (ex : TAJ, FPR, STIC, FNAEG) dont l'utilisation est strictement encadrée par la loi (Art. R. 434-21 CSI). Toute utilisation abusive est un manquement à la probité.
- Raison de l'incertitude : Incertain. Les sigles TAJ, FPR, STIC, FNAEG ne sont cités nommément dans aucune source fournie ; fiches.html mentionne seulement l'art. R.434-21 de façon générique. Note pour Zay : le STIC a en principe été remplacé par le TAJ en 2014, donc le citer comme fichier actuel pourrait être obsolète - mais ce point n'a pas pu être vérifié via fiches.html ou un PDF du dossier, il est donc seulement signalé et non corrigé.

