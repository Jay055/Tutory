const router = require('express').Router();

const authMiddleware = require('../middlewares/auth.middlewares');
const {
  login,
  register,
  logout,
  profile,
} = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', authMiddleware, login);
router.get('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, profile);

module.exports = router;
