const tables = require("../tables");
// const streetArtManager = require("../models/StreetArtManager");
// const streetArtManager = require("../models/StreetArtManager").getInstance();

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const streetArtItems = await tables.streetArt.readAll();

    res.json(streetArtItems);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const streetArt = await tables.streetArt.read(req.params.id);

    if (streetArt === null) {
      res.sendStatus(404);
    } else {
      res.json(streetArt);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const update = async (req, res, next) => {
  const { id } = req.params;
  const streetArtUpdated = req.body;

  try {
    const existingStreetArt = await tables.streetArt.read(id);

    if (!existingStreetArt) {
      return res.status(404).json({ error: "Œuvre non trouvée" });
    }

    await tables.streetArt.update(id, streetArtUpdated);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
  return undefined;
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const streetArt = req.body;

  streetArt.linkImage = `/assets/oeuvres/${req.file.filename}`;
  try {
    const insertId = await tables.streetArt.create(streetArt);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  const { id } = req.params;
  const options = { deleteImage: true };
  try {
    await tables.streetArt.destroy(id, options);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
