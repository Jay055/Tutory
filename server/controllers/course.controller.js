const Course = require('../models/course.model');
const slugify = require('slugify');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { readFileSync } = require('fs');

require('dotenv').config();
// configure AWS
const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

const createCourse = async (req, res) => {
  const { course } = req.body;

  const courseExists = await Course.findOne({
    slug: slugify(course.title.toLowerCase()),
  });

  if (courseExists)
    return res.status(409).send({ status: 'Conflict! Title taken ' });

  try {
    const newCourse = await new Course({
      slug: slugify(course.title),
      teacher: req.session.uid,
      ...course,
    }).save();
    // newCourse.teacher = req.session.uid;
    console.log('new', newCourse);
    // await newCourse.save();

    res.json(newCourse);
  } catch (err) {
    console.log(err);
  }
};

//
const getTutorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ teacher: req.session.uid });
    // console.log(courses);
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.json({ err: 'No image was found' });
    // prepare the image, the image is gotten as a binary data
    //  create a new buffer from the image, get rid of unnecessary properties (data type)

    const buff = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    // split the image by ; to get jpeg only ,
    const type = image.split(';')[0].split('/')[1];

    // image params
    const bucketParams = {
      Bucket: process.env.AWS_BUCKET,
      Key: `${uuidv4()}.${type}`,
      Body: buff,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: `image/${type}`,
    };

    // upload to s3
    S3.upload(bucketParams, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(422);
      }

      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

// get single course
const getSingleCourse = async (req, res) => {
  const { slug } = req.params;
  try {
    //
    const course = await Course.findOne({ slug })
      .populate('teacher', '_id name')
      .exec();

    console.log('populated course', course);
    res.json(course).status(200);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

// upload video
const uploadVideo = async (req, res) => {
  console.log('upload video', req.files);

  // video params
  const bucketParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: `${uuidv4()}.${req.files.video.type.split('/')[1]}`,
    Body: readFileSync(req.files.video.path),
    ACL: 'public-read',
    ContentType: req.files.video.type,
  };

  // upload to s3
  S3.upload(bucketParams, (err, data) => {
    if (err) {
      console.log(err);
      return res.sendStatus(422);
    }

    res.send(data);
  });
};

module.exports = {
  createCourse,
  getTutorCourses,
  uploadImage,
  getSingleCourse,
  uploadVideo,
};
