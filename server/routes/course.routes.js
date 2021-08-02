const router = require('express').Router();

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');

const {
  createCourse,
  getTutorCourses,
  uploadImage,
  getSingleCourse,
} = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

router.get('/tutor-courses', getTutorCourses);
// image
router.post('/upload-image', uploadImage);
//  single course
router.get('/single-course/:slug', getSingleCourse);

module.exports = router;
