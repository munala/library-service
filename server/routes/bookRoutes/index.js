const express = require('express');
const bookController = require('../../controllers/bookController');

const bookRouter = express.Router();

/**
 * [exports function that sets up book routes]
 * @return {Object} [book router]
 */
module.exports = () => {
  bookRouter.route('/')
    .get(bookController.getBooks) // get books
    .post(bookController.createBook); // create a book

  bookRouter.route('/:bookId').get(bookController.getBook); // get a specific book

  bookRouter.route('/:bookId').put(bookController.updateBook); // update a book

  bookRouter.route('/:bookId').delete(bookController.deleteBook); // delete a book

  bookRouter.route('/:bookId/borrow').put(bookController.borrowBook); // borrow a book

  bookRouter.route('/:bookId/return').put(bookController.returnBook); // return a book

  bookRouter.route('/:bookId/clear').put(bookController.clearBook); // clear a book

  return bookRouter;
};
