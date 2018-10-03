/* eslint-disable no-console */
require('console.table');
const moment = require('moment');
const initDb = require('../server/startup/db');
const Book = require('../server/models/Book');

initDb() // initialise database connection
  .then(() => {
    Book.find({})
      .then((books) => { // find books
        if (books.length === 0) {
          console.log('No books in database');

          return;
        }

        console.log('\nLIST OF ALL BOOKS');
        console.log('=================\n');

        const tableData = books.map(book => ({ // format for table
          Name: book.name,
          'Borrow Count': book.borrowCount,
          Status: book.getStatus(),
          'Due Date': book.dateBorrowed ? moment(book.dateBorrowed).add(7, 'days').format('llll') : '',
        }));

        console.table(tableData);

        process.exit(0); // end process
      })
      .catch((err) => {
        console.log(err);

        process.exit(1); // end process with error
      });
  })
  .catch((err) => {
    console.log(err);

    process.exit(1); // end process with error
  });
