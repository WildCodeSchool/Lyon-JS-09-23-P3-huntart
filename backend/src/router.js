const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const streetArtControllers = require("./controllers/streetArtControllers");
const uploadImage = require("./services/imageUpload");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/streetArt", streetArtControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/streetArt/:id", streetArtControllers.read);

// Route to add a new item
router.post("/streetArt", uploadImage, streetArtControllers.add);

// Route to edit specific item by ID
router.put("/streetArt/:id", streetArtControllers.update);

// Route to delete specific item by Id
router.delete("/streetArt/:id", streetArtControllers.destroy);

module.exports = router;
