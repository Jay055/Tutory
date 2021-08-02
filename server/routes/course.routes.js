const router = require('express').Router();

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');

const {
  createCourse,
  getTutorCourses,
} = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

router.get('/tutor-courses', getTutorCourses);

module.exports = router;
