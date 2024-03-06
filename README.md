## Concept

Ce site a pour but de partager des street arts partout où vous en trouvez. 

## Installation & Utilisation

### Démarrage du projet 

- Clonez ce repo avec `git@github.com:WildCodeSchool/Lyon-JS-09-23-P3-huntart.git` puis `cd Lyon-JS-09-23-P3-huntart` (`cd Lyon` puis tab pour compléter)
- Taper `npm install` dans la console (bien être dans la racine)
- Créer les fichiers (`.env`) dans chaque dossier : `backend` et `frontend`.
Vous pouvez copier le `.env.sample` pour démarrer (**don't** ne pas les supprimer)

### Commande disponible

- `db:migrate` : Lancer le script pour créer et utiliser la base de donnée
- `db:seed` : Remplir la base de données avec des données factices
- `dev` : Lancer les scripts pour lancer le serveur backend et frontend
- `dev-front` : Démarrer le serveur front
- `dev-back` : Démarrer le serveur backend
- `lint` : Lancer les vérifications de lint (à faire à chaque commit)

## FAQ
### Fonctions incluses
- Deux BREADS : user (seulement en back, utilisable avec postman) et streetArt (fonctionnel dans le front et le back)
- L'authentification avec jwt et cookie
- Refaire tout le css du projet précédent pour changer le look et corriger le côté responsive

### Fonctions pas encore incluses
- L'envoie d'email depuis les formulaires
- Changer de dossier pour les assets en lisant '''[static assets](https://vitejs.dev/guide/assets)''' 

### Langages utilisés
#### Frontend
Pour la partie front j'ai utilisé React.

#### Backend
Pour la partie back j'ai utilisé NodeJs avec Express et MySQL pour la base de donnée.

### A propos des ressources
Pour le moment les ressources sont en local dans '''/frontend/public/assets'''

### Remerciement
Merci pour vos avis et votre aide ainsi que les apports de Matthieu et Marco qui ont donné accès à une nouvelle vie.

### Contact
Vous pouvez me contacter sur GitHub pour toute question, suggestion d'amélioration ou contribution au projet. N'hésitez pas à ouvrir des Pull Requests ou à signaler des problèmes sur la page du projet.