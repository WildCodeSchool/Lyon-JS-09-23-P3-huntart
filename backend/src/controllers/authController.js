const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user === undefined) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);
    if (verified) {
      delete user.password;
      const token = await jwt.sign(
        { sub: user.id, email: user.email },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
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
