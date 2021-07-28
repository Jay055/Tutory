const express = require('express');
const router = require('./routes/authRoutes');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./config/db');

db();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error with server ${err}`);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
