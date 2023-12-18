const database = require("./database/client");

database
  .getConnection()
  .then((connection) => connection.query("SELECT * FROM streetArt"))
  .then(([results]) =>
    console.info(
      "Connexion réussie. Résultats de la requête de test :",
      results
    )
  )
  .catch((error) =>
    console.error(
      "Erreur lors de la connexion à la base de données :",
      error.message
    )
  )
  .finally(() => database.end());
