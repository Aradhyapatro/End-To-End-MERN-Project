const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token, process.env.jwt_secret);
    req.user = decode;
    next();
  } else {
    res.status(500);
    throw new Error("No Header so not authorized");
  }
};

module.exports = { protect };
