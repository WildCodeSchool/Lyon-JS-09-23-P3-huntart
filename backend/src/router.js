const express = require("express");

const router = express.Router();
const StreetArtService = require("./services/StreetArtService");

/* ************************************************************************* */
// Define Your API/*  */ Routes Here
/* ************************************************************************* */
const streetArtService = new StreetArtService();

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/streetArt", async (req, res) => {
  const streetArtList = await streetArtService.getAllStreetArt();
  res.json(streetArtList);
});
// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/streetArt/:id", async (req, res) => {
  const streetArtId = req.params.id;
  const streetArt = await streetArtService.getStreetArtById(streetArtId);
  res.json(streetArt);
});

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
