const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};
const hashPassword = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;
    const passwordhashed = await argon2.hash(password, hashingOptions);
    req.body.password = passwordhashed;
    delete req.body.passwordc;
    next();
  } catch (err) {
    next(err);
  }
};
const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.header.get("Authorization"); // fixed
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
module.exports = {
  hashPassword,
  verifyToken,
};
