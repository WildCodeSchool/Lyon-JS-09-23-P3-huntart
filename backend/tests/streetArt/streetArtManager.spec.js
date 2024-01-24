// Import required dependencies
const { database, tables } = require("../setup");

// Test suite for the create method of StreetArtManager
describe("Create street art", () => {
  it("should create a street art successfully", async () => {
    // Define a sample street art for testing
    const testStreetArt = {
      title: "Sample Street Art",
    };

    // Send a create request to the streetArt table with a test street art
    const insertId = await tables.streetArt.create(testStreetArt);

    // Check if the newly added street art exists in the database
    const [rows] = await database.query(
      "select * from streetArt where id = ?",
      insertId
    );

    const foundStreetArt = rows[0];

    // Assertions
    expect(foundStreetArt).toBeDefined();
    expect(foundStreetArt.title).toBe(testStreetArt.title);
  });

  it("should throw when passing invalid object", async () => {
    // Thx https://jestjs.io/docs/asynchronous#asyncawait

    // Send a create request to the streetArt table with an empty object
    const promise = tables.streetArt.create({});

    // Assertions
    await expect(promise).rejects.toThrow();
  });
});
