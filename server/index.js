const cors = require('cors');
const bodyParser = require('body-parser');
const initDb = require('./startup/db');
const bookRouter = require('./routes/bookRoutes')();

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/books', bookRouter); // setup book routes

  initDb(); // setup database
};
