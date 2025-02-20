const mongoose = require('mongoose');

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
};
module.exports = connectDB;
