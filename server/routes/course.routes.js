const router = require('express').Router();

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');

const {
  createCourse,
  getTutorCourses,
  uploadImage,
} = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

router.get('/tutor-courses', getTutorCourses);
// image
router.post('/upload-image', uploadImage);

module.exports = router;
