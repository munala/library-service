const borrowBook = require('./borrowBook');
const createBook = require('./createBook');
const getBook = require('./getBook');
const updateBook = require('./updateBook');
const deleteBook = require('./deleteBook');
const returnBook = require('./returnBook');
const getBooks = require('./getBooks');
const clearBook = require('./clearBook');
const getBookStatus = require('./getBookStatus');

module.exports = {
  borrowBook,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  returnBook,
  clearBook,
  getBookStatus,
  getBooks,
};
