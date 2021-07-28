const mongoose = require('mongoose');

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Mongo error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = db;
