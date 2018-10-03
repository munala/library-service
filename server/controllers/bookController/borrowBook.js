/**
 * [exports borrow book controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  const error = await req.book.borrow();

  if (error) {
    res.status(400).send({ message: error });
  } else {
    res.send({ message: 'Book borrowed' });
  }
};
