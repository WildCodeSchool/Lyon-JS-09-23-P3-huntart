/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true}] */

const { faker } = require("@faker-js/faker");
require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    await database.query("DELETE FROM user_streetArt");
    await database.query("DELETE FROM streetArt_Theme");
    await database.query("DELETE FROM streetArt");
    await database.query("DELETE FROM theme");
    await database.query("DELETE FROM user");

    const users = [
      { pseudo: "user1", email: "toto@tata.com", password: "p4ssw0rd" },
      { pseudo: "user2", email: "johndoe@example.com", password: "m0t2p4s5e" },
    ];

    users.forEach((user) => {
      queries.push(
        database.query(
          "INSERT INTO user(pseudo, email, password) VALUES (?, ?, ?)",
          [user.pseudo, user.email, user.password]
        )
      );
    });

    // Seed street arts
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
