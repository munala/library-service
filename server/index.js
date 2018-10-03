const cors = require('cors');
const bodyParser = require('body-parser');
const initDb = require('./startup/db');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  initDb();
};
