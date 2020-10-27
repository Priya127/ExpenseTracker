const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') })


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;