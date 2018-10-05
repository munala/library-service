const Book = require('../../models/Book');
const borrow = require('./borrowBook');
const returnBook = require('./returnBook');
const clear = require('./clearBook');
const getStatus = require('./getBookStatus');
/**
 * [exports update book controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  const bookActionTypes = {
    borrow,
    clear,
    getStatus,
    return: returnBook,
  };

  const bookAction = bookActionTypes[req.body.type];

  // borrow, clear, getStatus or return
  if (bookAction) {
    await bookAction(req, res);

    return;
  }

  // continue to update
  const { error } = Book.validate(req.body.book);

  if (error) {
    res.send(400).json({ message: error.details[0].message });

    return;
  }

  const existingBook = await Book.findOne(req.body);

  // check if existingBook is different
  if (existingBook && existingBook.id !== req.params.bookId) {
    res.status(409).json({
      message: 'A book already exists with the provided fields',
    });

    return;
  }

  const { name, author } = req.book;

  // protect author and name
  if (author !== req.body.book.author || name !== req.body.book.name) {
    res.status(409).json({
      message: 'name and author field cannot be changed',
    });

    return;
  }

  // update book
  Book.findByIdAndUpdate(req.params.bookId, req.body.book, null, (err, updatedBook) => {
    if (!err) {
      res.json({
        ...updatedBook._doc, // eslint-disable-line no-underscore-dangle
        ...req.body.book,
      });
    } else {
      throw new Error(err);
    }
  });
};
