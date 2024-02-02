const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const streetArtControllers = require("./controllers/streetArtControllers");
const userControllers = require("./controllers/userControllers");
const uploadImage = require("./services/imageUpload");

// Route to get a list of items
router.get("/streetArt", streetArtControllers.browse);
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/streetArt/:id", streetArtControllers.read);
router.get("/user/:id", userControllers.read);

// Route to add a new item
<<<<<<< HEAD
router.post("/items", itemControllers.add);
=======
router.post("/streetArt", streetArtControllers.add);
>>>>>>> d4f8d7d (fix PR)
router.post("/user", userControllers.add);
router.post("/streetArt", uploadImage, streetArtControllers.add);

// Route to edit specific item by ID
router.put("/streetArt/:id", streetArtControllers.update);
router.put("/user/:id", userControllers.update);

// Route to delete specific item by Id
router.delete("/streetArt/:id", streetArtControllers.destroy);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;
