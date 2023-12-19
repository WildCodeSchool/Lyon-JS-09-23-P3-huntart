require("dotenv").config();

const database = require("./database/client");

const imageLinks = [
  "/frontend/src/images/oeuvres/street_art_8bit_photo (1).jpg",
  "/frontend/src/images/oeuvres/street_art_8bit_photo(2).jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo (3).jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_8bit_photo.jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_collage_photo.jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_mosaic_photo (1).jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_mosaic_photo (2).jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_mosaic_photo.jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_photo (1).jpg",
  "Lyon-JS-09-23-P3-art-and-go/frontend/src/images/oeuvres/street_art_photo.jpg",
  // Ajoutez les liens des fausses images
];

const seed = async () => {
  try {
    const queries = [];

    await database.query("TRUNCATE streetArt");

    for (let i = 0; i < imageLinks.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO streetArt(id, name, linkImage) VALUES (?, ?, ?)",
          [i + 1, `Street Art ${i + 1}`, imageLinks[i]]
        )
      );
    }

    await Promise.all(queries);

    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

seed();
