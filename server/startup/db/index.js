const mongoose = require('mongoose');
const config = require('config');

const mongodbUrl = process.env[config.get('db.mongodbUrl')]; // get connection url from env

module.exports = async () => {
  const db = await mongoose.connect(mongodbUrl, { // connect to database
    useNewUrlParser: true,
  });

  return db;
};
