const router = require('express').Router();

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');
const {
  login,
  register,
  logout,
  profile,
} = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, authSignIn, profile);




module.exports = router;
