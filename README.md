
![Logo](https://i.postimg.cc/9Q6xPqDL/huntartlogo.png)

[🇫🇷 Version française](#hunt-art-fr)
[🇬🇧 English Version](#hunt-art-en)

## Hunt Art FR

Ce site a pour objectif de partager des œuvres d'art urbain partout où vous les trouvez. Que vous soyez artiste, amateur ou simplement curieux, Hunt Art offre une plateforme pour découvrir, partager et apprécier la diversité de la créativité urbaine.


## Fonctionnalités

- Création, modification, suppression de compte utilisateur
- Connexion à son compte
- Lancer le site pour voir les oeuvres d'art
- Voir, poster, modifier et supprimer des photos
- Naviguer sur les différentes pages du projet




## Roadmap

- Additional browser support

- Add more integrations


## Captures d'écran

Version desktop
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Version mobile
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Références de l'API

#### Obtenir toutes les oeuvres

```http
  GET /api/streetart
```

| Paramètre | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Non requis** |

#### Obtenir un élément

```http
  GET /api/streetart/${id}
```

| Paramètr | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requis** ID de l'élément à récupérer |


#### Obtenir tous les utilisateurs

```http
  GET /api/user
```

| Paramètre | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Non requis** |

#### Obtenir un utilisateur

```http
  GET /api/user/${id}
```

| Paramètr | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requis** ID de l'élément à récupérer |




## Déploiement

- Clonez ce repo avec `git@github.com:WildCodeSchool/Lyon-JS-09-23-P3-huntart.git` puis `cd Lyon-JS-09-23-P3-huntart` (`cd Lyon` puis tab pour compléter)
- Tapez `npm install` dans la console (bien être dans la racine)

## Variables d'environnement

Créer les fichiers (.env) dans chaque dossier : backend et frontend. Vous pouvez copier le .env.sample pour démarrer (NE PAS LES SUPPRIMER!).

![App Screenshot](https://postimg.cc/rd5Pxx4P)
## Installation

Voici les étapes d'installation pour exécuter ce projet :

- Tout d'abord, assurez-vous d'être dans le répertoire racine du projet.

- Exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```bash
  npm install
```
- Ensuite, exécutez la commande suivante pour créer la base de données :

```bash
  npm run db:migrate
```
- Après la création de la base de données, vous pouvez la remplir avec des données factices en exécutant la commande :
```bash
  npm run db:seed
```



## Lancer Localement

- Enfin, pour lancer les serveurs backend et frontend simultanément, utilisez la commande suivante :
```bash
  npm run dev
```
- Ouvrez votre navigateur web préféré.
- Dans la barre d'adresse du navigateur, saisissez l'URL suivante :
```bash
  http://localhost:3000

```
## Autres commandes
Démarrer le serveur front :
```bash
  npm run dev-front
```
Démarrer le serveur backend :
```bash
  npm run dev-back
```
Lancer les vérifications de lint (à faire à chaque commit)
```bash
  npm run lint
```

Pour exécuter les tests avec Jest, utilisez la commande suivante :

```bash
  npm run jest
```


## FAQ

### Outils
- **Concurrently :** Permet d'exécuter plusieurs commandes en même temps dans la même interface CLI.
- **Husky :** Permet d'exécuter des commandes spécifiques déclenchées par des événements git.
- **Vite :** Alternative à Create-React-App, regroupe moins d'outils pour une expérience plus fluide.
- **ESLint :** Outil de "Qualité de code" qui assure que les règles choisies seront respectées.
- **Prettier :** Autre outil de "Qualité de code" qui se concentre sur le guide de style.
- **_Norme Airbnb_ :** Une des "normes" les plus connues, même si elle n'est pas officiellement liée à ES/JS.

## Langages utilisés
### Frontend
Pour la partie front j'ai utilisé React.

### Backend
Pour la partie back j'ai utilisé NodeJs avec Express et MySQL pour la base de donnée.

## A propos des ressources
Pour le moment les ressources sont en local dans '''/frontend/public/assets'''

## Remerciement
Merci pour vos avis et votre aide ainsi que les apports de Matthieu et Marco qui ont donné accès à une nouvelle vie.## Retours

Si vous avez des retours, n'hésitez pas à nous contacter sur GitHub à l'adresse [techmefr](https://github.com/techmefr).

## Authors

- [@techmefr](https://www.github.com/techmefr)


## License

[MIT](https://choosealicense.com/licenses/mit/)

