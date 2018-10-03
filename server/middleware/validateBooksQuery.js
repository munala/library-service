const { celebrate, Joi } = require('celebrate');

/**
 * [exports middleware for validating book query params]
 * @type {function}
 */
module.exports = celebrate({
  query: {
    author: Joi.string().min(1),
    name: Joi.string().min(1),
  },
});
