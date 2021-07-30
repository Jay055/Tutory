const expressJwt = require('express-jwt');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  try {
    if (req.session.uid) {
      next();
    } else {
      res.status(401).send();
    }
  } catch (err) {
    return res.status(401);
  }
};

const authSignIn = expressJwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

module.exports = { authMiddleware, authSignIn };
