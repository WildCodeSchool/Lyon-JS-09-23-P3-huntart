// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const user = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
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
  // Solve ESLINT error : "Expected to return a value at the end of async arrow function.eslintconsistent-return function(req: any, res: any, next: any): Promise<any>"
  return undefined;
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const dataUser = req.body;
  try {
    // Insert the user into the database
    const user = await tables.user.readByEmail(dataUser.email);
    if (user !== undefined) {
      res.status(400).json("Email déjà utilisé");
    } else {
      const insertId = await tables.user.create(dataUser);
      res.status(201).json({ insertId });
    }
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await tables.user.destroy(id);
    // 204 = payload : No content : request success but there isn't data to send
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
