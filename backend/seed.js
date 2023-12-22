require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    await database.query("DELETE FROM streetArt_Theme");
    await database.query("DELETE FROM streetArt");

    for (let i = 1; i < 13; i += 1) {
      queries.push(
        database.query("INSERT INTO streetArt(name, linkImage) VALUES (?, ?)", [
          i + 1,
          `Street Art ${i + 1}`,
          `/assets/oeuvres/sta${i}.jpg`,
        ])
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
