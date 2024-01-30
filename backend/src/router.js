const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const streetArtControllers = require("./controllers/streetArtControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/streetArt", streetArtControllers.browse);
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/streetArt/:id", streetArtControllers.read);
router.get("/user/:id", userControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/streetArt", streetArtControllers.add);
router.post("/user", userControllers.add);

// Route to edit specific item by ID
router.put("/streetArt/:id", streetArtControllers.update);
router.put("/user/:id", userControllers.update);

// Route to delete specific item by Id
router.delete("/streetArt/:id", streetArtControllers.destroy);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;
