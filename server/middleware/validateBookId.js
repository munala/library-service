const mongoose = require('mongoose');
const Book = require('../models/Book');

/**
 * [exports middleware for validating book ids]
 * @type {function}
 */
module.exports = async (req, res, next) => {
  if (!req.params.bookId) {
    res.status(400).json({
      message: 'bookId is required',
    });

    return;
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    res.status(400).json({
      message: 'Invalid bookId',
    });

    return;
  }

  const book = await Book.findById(req.params.bookId);

  if (!book) {
    res.status(404).json({
      message: 'Book not found',
    });

    return;
  }

  req.book = book;

  next();
};
