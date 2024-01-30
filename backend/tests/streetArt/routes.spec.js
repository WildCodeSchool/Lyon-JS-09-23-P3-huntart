// Import required dependencies
const { app, request, tables } = require("../setup");

// Test suite for the GET /api/streetart route
describe("GET /api/streetart", () => {
  it("should fetch items successfully", async () => {
    // Define a sample item for testing
    const testStreetArt = {
      name: "Sample Street Art",
    };

    // Create a sample item in the database
    const insertId = await tables.streetArt.create(testStreetArt);

    // Send a GET request to the /api/items endpoint
    const response = await request(app).get("/api/streetart");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Check if the created item is present in the response
    const foundSreetArt = response.body.find(
      (streetArt) => streetArt.id === insertId
    );

    // Assertions
    expect(foundSreetArt).toBeInstanceOf(Object);
    expect(foundSreetArt.name).toBe(testStreetArt.name);
  });
});
// Test suite for the POST /api/streetart route
describe("POST /api/streetart", () => {
  it("should create a street art successfully", async () => {
    // Define a sample item for testing
    const testStreetArt = {
      name: "Sample Street Art",
    };

    // Send a POST request to the /api/streetart endpoint
    const response = await request(app)
      .post("/api/streetart")
      .send(testStreetArt);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.insertId).toBeDefined();
  });
});
// Test suite for the DELETE /api/items/:id route
describe("DELETE /api/streetart/:id", () => {
  it("should delete an existing street art successfully", async () => {
    // Define a sample item for testing
    const testStreetArt = {
      name: "Sample Street Art",
    };

    // Create a sample item in the database
    const insertId = await tables.streetArt.create(testStreetArt);

    // Send a DELETE request to the /api/streetart/:id endpoint
    const response = await request(app).delete(`/api/streetart/${insertId}`);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been deleted from the database
    const foundSreetArt = await tables.streetArt.read(insertId);

    // Assertions
    expect(foundSreetArt).toBeUndefined();
  });
});
