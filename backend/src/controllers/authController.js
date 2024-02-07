const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user === undefined) {
      res.sendStatus(422);
      return;
    }

    console.log(user.password, req.body.password);
    const verified = await argon2.verify(user.password, req.body.password);
    if (verified) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.password;
      const token = await jwt.sign(
        { sub: user.id, email: user.email },
        process.env.APP_SECRET,
        {
          expiresIn: "3d",
        }
      );
      res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          maxAge: 3600000,
        })
        .json({
          user,
          token,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};
module.exports = {
  login,
  logout,
};
