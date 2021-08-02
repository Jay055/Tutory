const mongoose = require('mongoose');
const User = require('./user.model');
const { Schema } = mongoose;

const testSchema = new mongoose.Schema({
  title: String,
  questions: [{ question: String }],
});

const chaptersSchema = new mongoose.Schema(
  {
    title: String,
    level: String,
    method: String,
    duration: String,
    video_url: {},
    slug: { type: String, lowercase: true },
    tests: [testSchema],
  },
  { timestamps: true }
);

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: { type: String },
    image: {},
    duration: {},
    slug: { type: String, lowercase: true },

    chapters: [chaptersSchema],
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },
  },

  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
