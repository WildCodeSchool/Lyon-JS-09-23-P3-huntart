const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const update = async (req, res, next) => {
  const { id } = req.params;
  const userUpdated = req.body;

  try {
    const existingUser = await tables.user.read(id);

    if (!existingUser) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    await tables.user.update(id, userUpdated);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
  return undefined;
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const dataUser = req.body;
  try {
    const user = await tables.user.readByEmail(dataUser.email);
    if (user !== undefined) {
      res.status(400).json("Email déjà utilisé");
    } else {
      const insertId = await tables.user.create(dataUser);
      res.status(201).json({ insertId });
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await tables.user.destroy(id);
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
