// Import required dependencies
const { database, tables } = require("../setup");

// Test suite for the create method of StreetArtManager
describe("Create street art", () => {
  it("should create a street art successfully", async () => {
    // Define a sample item for testing
    const testStreetArt = {
      name: "Sample Street Art",
      linkImage: "sample-link.jpg",
    };

    // Send a create request to the item table with a test item
    const insertId = await tables.streetArt.create(testStreetArt);

    // Check if the newly added item exists in the database
    const [rows] = await database.query(
      "select * from streetArt where id = ?",
      insertId
    );

    const foundSreetArt = rows[0];

    // Assertions
    expect(foundSreetArt).toBeDefined();
    expect(foundSreetArt.name).toBe(testStreetArt.name);
  });

  it("should throw when passing invalid object during create", async () => {
    try {
      await tables.streetArt.create({
        name: "Invalid Street Art",
        linkImage: "invalid-link.jpg",
      });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      const actualErrorMessage = error.message;
      expect(actualErrorMessage).toContain("Validation failed");
    }
  });
});
