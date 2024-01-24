// Import required dependencies
const { app, request, tables } = require("../setup");

// Test suite for the GET /api/streetart route
describe("GET /api/streetart", () => {
  it("should fetch street arts successfully", async () => {
    // Define a sample street art for testing
    const testStreetArt = {
      title: "Sample Street Art",
    };

    // Create a sample street art in the database
    const insertId = await tables.streetArt.create(testStreetArt);

    // Send a GET request to the /api/streetart endpoint
    const response = await request(app).get("/api/streetart");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Check if the created street art is present in the response
    const foundStreetArt = response.body.find(
      (streetArt) => streetArt.id === insertId
    );

    // Assertions
    expect(foundStreetArt).toBeInstanceOf(Object);
    expect(foundStreetArt.title).toBe(testStreetArt.title);
  });
});

// Test suite for the GET /api/streetart/:id route
describe("GET /api/streetart/:id", () => {
  it("should fetch a single street art successfully", async () => {
    // Define a sample street art for testing
    const testStreetArt = {
      title: "Sample Street Art",
    };

    // Create a sample street art in the database
    const insertId = await tables.streetArt.create(testStreetArt);

    // Send a GET request to the /api/streetart/:id endpoint
    const response = await request(app).get(`/api/streetart/${insertId}`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.id).toBe(insertId);
    expect(response.body.title).toBe(testStreetArt.title);
  });

  it("should return 404 for non-existent street art", async () => {
    // Send a GET request to the /api/streetart/:id endpoint with an invalid ID
    const response = await request(app).get("/api/streetart/0");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the POST /api/streetart route
// Doesn't pass: maybe something to change in app config :/
// Hint: enabling log could help ;)
describe("POST /api/streetart", () => {
  it("should add a new street art successfully", async () => {
    // Define a sample street art for testing
    const testStreetArt = {
      title: "Sample Street Art",
    };

    // Send a POST request to the /api/streetart endpoint with a test street art
    const response = await request(app)
      .post("/api/streetart")
      .send(testStreetArt);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toEqual(expect.any(Number));

    // Check if the newly added street art exists in the database
    const foundStreetArt = await tables.streetArt.read(response.body.insertId);

    // Assertions
    expect(foundStreetArt).toBeDefined();
    expect(foundStreetArt.title).toBe(testStreetArt.title);
  });
});

// TODO: implement PUT and DELETE routes

/*
// Test suite for the PUT /api/items/:id route
describe("PUT /api/items/:id", () => {
  it("should update an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Define an updated item object
    const updatedItem = {
      title: "Updated Item",
    };

    // Send a PUT request to the /api/items/:id endpoint with updated data
    const response = await request(app)
      .put(`/api/items/${insertId}`)
      .send(updatedItem);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been updated in the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeDefined();
    expect(foundItem.title).toBe(updatedItem.title);
  });
});

// Test suite for the DELETE /api/items/:id route
describe("DELETE /api/items/:id", () => {
  it("should delete an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Send a DELETE request to the /api/items/:id endpoint
    const response = await request(app).delete(`/api/items/${insertId}`);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been deleted from the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeUndefined();
  });
});
*/
