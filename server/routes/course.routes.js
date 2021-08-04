const router = require('express').Router();
const formidable = require('express-formidable');

const {
  authSignIn,
  authMiddleware,
} = require('../middlewares/auth.middlewares');

const {
  createCourse,
  getTutorCourses,
  uploadImage,
  getSingleCourse,
  uploadVideo,
  addLesson,
} = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

router.get('/tutor-courses', getTutorCourses);
// image
router.post('/upload-image', uploadImage);
//  single course
router.get('/single-course/:slug', getSingleCourse);
// video upload
router.post('/video-upload', formidable(), uploadVideo);
// add lessons

router.post('/add-lesson/:slug/:teacherId', addLesson);

module.exports = router;
