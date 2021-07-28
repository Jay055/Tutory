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

module.exports = authMiddleware;
