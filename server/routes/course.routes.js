const router = require('express').Router();

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');

const { createCourse } = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

module.exports = router;
