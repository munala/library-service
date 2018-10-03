const Book = require('../../models/Book');

/**
 * [exports create book controller]
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

  if (existingBook) {
    res.status(409).json({
      message: 'Book already exists',
    });

    return;
  }

  const book = new Book(req.body);

  await book.save();

  res.json(book);
};
