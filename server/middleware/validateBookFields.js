const moment = require('moment');
const { celebrate, Joi } = require('celebrate');

/**
 * [exports middleware for validating book fields]
 * @type {function}
 */

const bookValidation = Joi.object().keys({
  name: Joi.string().required(),
  author: Joi.string().required(),
  yearOfPublication: Joi.number().min(1000).max(moment().year()).required(),
  numberOfPages: Joi.number().min(1).required(),
});

module.exports = celebrate({
  body: Joi.object().keys({
    type: Joi.string().required(),
    book: bookValidation,
  }).when(Joi.object({
    type: Joi.string().valid('update'),
  }), {
    then: Joi.object().keys({
      book: bookValidation.required(),
    }),
    otherwise: Joi.object({
      type: Joi.string().valid('update', 'borrow', 'return', 'clear', 'getStatus').required(),
    }),
  }),
});
