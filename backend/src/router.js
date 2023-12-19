const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const StreetArtControllers = require("./controllers/streetArtControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("./streetArt", StreetArtControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/streetArt/:id", StreetArtControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/streetArt", StreetArtControllers.add);

/* ************************************************************************* */

module.exports = router;
