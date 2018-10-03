const moment = require('moment');

/**
 * [exports function]
 * @param  {Date} dateBorrowed [date book was borrowed]
 * @return {Number} [number of days since date borrowed]
 */

module.exports = (dateBorrowed) => {
  const durationInDays = moment().diff(new Date(dateBorrowed), 'days');

  return durationInDays;
};
