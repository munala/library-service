const moment = require('moment');
const { celebrate, Joi } = require('celebrate');

/**
 * [exports middleware for validating book fields]
 * @type {function}
 */
module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    author: Joi.string().required(),
    yearOfPublication: Joi.number().min(1000).max(moment().year()).required(),
    numberOfPages: Joi.number().min(1).required(),
  }),
});
