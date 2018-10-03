/**
 * [exports get book status controller]
 * @param  {Object}  req [response]
 * @param  {Object}  res [request]
 */
module.exports = async (req, res) => {
  res.json({ status: req.book.getStatus() });
};
