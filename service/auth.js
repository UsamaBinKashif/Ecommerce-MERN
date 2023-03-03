// json web token
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(" ")[1];
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (error, user) => {
      if (error) {
        return res.status(401).json("Unvalid Token Access");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("You are not authenticated");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("You are not authenticated");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth };
