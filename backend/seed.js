/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true}] */

const { faker } = require("@faker-js/faker");
require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    await database.query("DELETE FROM streetArt_Theme");
    await database.query("DELETE FROM streetArt");

    for (let i = 1; i < 10; i += 1) {
      const name = faker.lorem.word();
      const linkImage = `/assets/oeuvres/sta${i}.jpg`;
      const description = faker.lorem.text();

      queries.push(
        database.query(
          "INSERT INTO streetArt(name, linkImage, description) VALUES (?, ?, ?)",
          [name, linkImage, description]
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
