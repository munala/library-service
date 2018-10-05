const express = require('express');
const bookController = require('../../controllers/bookController');
const validateBookFields = require('../../middleware/validateBookFields');
const validateBookId = require('../../middleware/validateBookId');
const validateBooksQuery = require('../../middleware/validateBooksQuery');

const bookRouter = express.Router();

/**
 * [exports function that sets up book routes]
 * @return {Object} [book router]
 */
module.exports = () => {
  bookRouter.route('/')
    .get(validateBooksQuery, bookController.getBooks) // get books
    .post(validateBookFields, bookController.createBook); // create a book

  bookRouter.use('/:bookId', validateBookId);

  bookRouter.route('/:bookId')
    .get(bookController.getBook); // get a specific book

  bookRouter.route('/:bookId')
    .put(validateBookFields, bookController.updateBook); // update a book

  // get a specific book
  bookRouter.route('/:bookId')
    .get(bookController.getBook);

  // update, borrow, return, clear or get status of a book
  bookRouter.route('/:bookId')
    .put(validateBookFields, bookController.updateBook);

  // delete a book
  bookRouter.route('/:bookId')
    .delete(bookController.deleteBook);

  // get a book's status
  bookRouter.route('/:bookId/status')
    .get(bookController.getBookStatus);

  return bookRouter;
};
