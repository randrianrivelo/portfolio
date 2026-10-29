# Portfolio — Hyacinthe Randrianarivelo

Site statique (HTML, CSS, JavaScript natifs, sans dépendance).

## Structure
- `index.html` : accueil (hero, à propos, projets, compétences, parcours, contact)
- `project.html` : fiche détaillée, générée depuis `js/projects.js` (`project.html?id=safezone`)
- `js/projects.js` : **seul fichier à modifier** pour tes infos et tes projets
- `js/main.js` : menu, animation d'apparition au scroll, filtres, pages projet
- `css/style.css` : design (crème, noir, terracotta)
- `assets/images` (photo, captures), `assets/cv` (CV PDF)

## Lancer en local
Ouvre `index.html` dans le navigateur, ou lance `python -m http.server 8000` dans ce dossier puis va sur http://localhost:8000.

## Personnaliser (dans `js/projects.js`)
- `SITE.email`, `SITE.photo` (ex. `assets/images/photo.jpg`), `SITE.cv` (ex. `assets/cv/cv.pdf`) : vide = élément masqué.
- Pour chaque projet : `github`, `demo`, `image` (capture), `shots` (liste de captures), `status`, `details` (sections `{t, items}` : contexte, architecture, difficultés, limites…). Tout champ vide est masqué.
- N'écris que des faits vérifiés.

## À compléter / confirmer
disponibilité (non affichée tant que non confirmée), liens GitHub et captures de chaque projet, projets Tournoi, Textiles et Spring Boot (à décrire avant ajout), rôle dans Miaina, certificat du hackathon, niveaux de compétences (non publiés), Gestion de Parking / To-Do List / Dashboard Bootstrap (à ajouter si ce sont de vrais projets).

## Déploiement
Dépose le dossier sur GitHub Pages, Netlify ou Vercel (site statique, pas de build). Une fois l'URL finale connue, ajoute la balise `canonical` et une image Open Graph.

## Visuels des projets
Les images de `assets/images/projects/*.svg` sont des illustrations par défaut. Pour une vraie capture, mets-la dans `assets/images/` (JPG, ~1000 px, < 200 Ko) et change `image:` du projet dans `js/projects.js`.
