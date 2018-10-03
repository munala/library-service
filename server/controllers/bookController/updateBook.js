const Book = require('../../models/Book');

/**
 * [exports update book controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  const { error } = Book.validate(req.body);

  if (error) {
    res.send(400).json({ message: error.details[0].message });

    return;
  }

  const existingBook = await Book.findOne(req.body);

  if (existingBook && existingBook.id !== req.params.bookId) { // check if existingBook is different
    res.status(409).json({
      message: 'Book already exists',
    });

    return;
  }

  const { name, author } = req.book;

  if (author !== req.body.author || name !== req.body.name) { // protect author and name
    res.status(409).json({
      message: 'name and author field cannot be changed',
    });

    return;
  }

  Book.findByIdAndUpdate(req.params.bookId, req.body, null, (err, updatedBook) => { // update book
    if (!err) {
      res.json(updatedBook);
    } else {
      throw new Error(err);
    }
  });
};
