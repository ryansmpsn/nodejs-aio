const mongoose = require('mongoose');

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, clientOptions);
  } catch (err) {
    console.error(err);
  }
};
module.exports = connectDB;
