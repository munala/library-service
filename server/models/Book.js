const mongoose = require('mongoose');
const moment = require('moment');
const Joi = require('joi');

const calculateDuration = require('../utils/calculateDuration');

/**
 * [BookSchema Schema for book model]
 * @type {mongoose.Schema}
 */
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  yearOfPublication: Number,
  numberOfPages: Number,
  dateBorrowed: Date,
  borrowCount: {
    type: Number,
    default: 0,
  },
});

/**
 * [borrow sets date borrowed and increases borrow count]
 * @return {[Object]} [error object or null]
 */
BookSchema.methods.borrow = async function borrow() {
  if (this.dateBorrowed) {
    return ('Book has already been borrowed');
  }

  this.dateBorrowed = moment();
  this.borrowCount += 1;

  await this.save();

  return (null);
};

/**
 * [returnBook clears date borrowed if returned in time]
 * @return {[Object]} [error object or null]
 */
BookSchema.methods.return = async function returnBook() {
  if (!this.dateBorrowed) {
    return ('Book had not been borrowed');
  }

  const duration = calculateDuration(this.dateBorrowed);

  if (duration > 7) {
    return ('Book return date is overdue');
  }

  this.dateBorrowed = null;

  await this.save();

  return (null);
};

/**
 * [clearOverdue clears date borrowed if returned late]
 * @return {[Object]} [error object or null]
 */
BookSchema.methods.clearOverdue = async function clearOverdue() {
  if (!this.dateBorrowed) {
    return ('Book does not have an overdue return date');
  }

  this.dateBorrowed = null;

  await this.save();

  return (null);
};

/**
 * [getStatus checks status of book]
 * @return {[Object]} [error object or null]
 */
BookSchema.methods.getStatus = function getStatus() {
  if (this.dateBorrowed) {
    const durationInDays = calculateDuration(this.dateBorrowed);

    if (durationInDays > 7) {
      return 'overdue';
    }

    return 'borrowed';
  }

  return 'available';
};

/**
 * [validateSchema validates book fields]
 * @param  {Object} book [book boject]
 * @return {Object}      [object containing validation errors]
 */
BookSchema.statics.validate = function validateSchema(book) {
  const schema = {
    name: Joi.string().required(),
    author: Joi.string().required(),
    yearOfPublication: Joi.number().min(1000).max(moment().year()).required(),
    numberOfPages: Joi.number().min(1).required(),
  };

  return Joi.validate(book, schema);
};

const Book = mongoose.model('books', BookSchema);

module.exports = Book;
