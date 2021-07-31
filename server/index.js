const express = require('express');
const authRouter = require('./routes/auth.routes');
const courseRouter = require('./routes/course.routes');

const cors = require('cors');
const app = express();
const session = require('express-session');
const db = require('./config/db');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
db();

const corsConfig = {
  origin: ['http://localhost:3000'],

  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(morgan('dev'));

// set up session

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60, // 60mins
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);

app.use(authRouter);
app.use(courseRouter);
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error with server ${err}`);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
