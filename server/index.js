const cors = require('cors');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const initDb = require('./startup/db');
const bookRouter = require('./routes/bookRoutes')();

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/books', bookRouter); // setup book routes
  app.use(errors());
  initDb(); // setup database
};
