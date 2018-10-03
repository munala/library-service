const Book = require('../../models/Book');

/**
 * [exports get books controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  const query = {};
  const { name, author } = req.query;

  if (name) {
    query.name = name;
  }

  if (author) {
    query.author = author;
  }

  const books = await Book.find(query);

  res.json(books);
};
