const express = require("express");

const router = express.Router();
const auth = require("./services/Auth");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const streetArtControllers = require("./controllers/streetArtControllers");
const logauth = require("./controllers/authController");

// Route to get a list of items
router.get("/streetArt", streetArtControllers.browse);

// Route to get a specific item by ID
router.get("/streetArt/:id", streetArtControllers.read);

// Route to add a new item
router.post("/streetArt", auth.verifyToken, streetArtControllers.add);
router.post("/login", logauth.login);

// Route to edit specific item by ID
router.put("/streetArt/:id", auth.verifyToken, streetArtControllers.update);

// Route to delete specific item by Id
router.delete("/streetArt/:id", auth.verifyToken, streetArtControllers.destroy);

module.exports = router;
