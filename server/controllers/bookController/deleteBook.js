const Book = require('../../models/Book');

/**
 * [exports delete book controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  Book.deleteOne({ _id: req.params.bookId }, (err) => {
    if (!err) {
      res.json({ message: 'Book deleted' });
    } else {
      throw new Error(err);
    }
  });
};
