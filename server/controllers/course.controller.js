const Course = require('../models/course.model');
const slugify = require('slugify');

require('dotenv').config();

const createCourse = async (req, res) => {
  const { course } = req.body;

  const courseExists = await Course.findOne({
    slug: slugify(course.title.toLowerCase()),
  });

  if (courseExists)
    return res.status(409).send({ status: 'Title already taken' });

  try {
    const newCourse = await new Course({
      slug: slugify(course.title),
      teacher: req.session.uid,
      ...course,
    }).save();

    res.json(newCourse);
  } catch (err) {
    console.log(err);
  }
};

//
const getTutorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ teacher: req.session.uid });

    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createCourse, getTutorCourses };
