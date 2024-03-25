const express = require("express");

const router = express.Router();
const auth = require("./services/Auth");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const streetArtControllers = require("./controllers/streetArtControllers");
const userControllers = require("./controllers/userControllers");
const uploadImage = require("./services/imageUpload");
const logauth = require("./controllers/authController");

// Route to get a list of items
router.get("/streetArt", streetArtControllers.browse);
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/streetArt/:id", streetArtControllers.read);
router.get("/user/:id", userControllers.read);

// Route to add a new item
// router.post("/streetArt", streetArtControllers.add);
router.post("/user", auth.hashPassword, userControllers.add);
// router.post(
//   "/streetArt",
//   auth.verifyToken,
//   uploadImage,
//   streetArtControllers.add
// );
router.post("/streetArt", uploadImage, streetArtControllers.add);
router.post("/login", logauth.login);

// Route to edit specific item by ID
router.put("/streetArt/:id", auth.verifyToken, streetArtControllers.update);
// router.put("/streetArt/:id", streetArtControllers.update);

router.put("/user/:id", userControllers.update);

// Route to delete specific item by Id
// router.delete("/streetArt/:id", auth.verifyToken, streetArtControllers.destroy);
router.delete("/streetArt/:id", streetArtControllers.destroy);

router.delete("/user/:id", userControllers.destroy);

module.exports = router;
