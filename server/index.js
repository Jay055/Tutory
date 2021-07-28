const express = require('express');
const router = require('./routes/auth.routes');
const cors = require('cors');
const app = express();
const session = require('express-session');
const db = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
db();
app.use(cors());
app.use(express.json());

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

app.use(router);
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
