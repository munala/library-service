const mongoose = require('mongoose');

module.exports = async () => {
  const db = await mongoose.connect(process.env.LIBRARY_SERVICE_MONGODB_URL, {
    useNewUrlParser: true,
  });

  return db;
};
