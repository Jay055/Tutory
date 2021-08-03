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
} = require('../controllers/course.controller');

router.post('/createcourse', createCourse);

router.get('/tutor-courses', getTutorCourses);
// image
router.post('/upload-image', uploadImage);
//  single course
router.get('/single-course/:slug', getSingleCourse);
// video upload
router.post('/video-upload', formidable(), uploadVideo);

module.exports = router;
