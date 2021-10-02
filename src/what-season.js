import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  let test1 = date.toString;
  let test2 = Date.parse(test1)
  if (!isNaN(test2)) return 'Invalid date!' 

  let month = date.getMonth()

  if (month >= 11 || month <= 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
}

// let d = new Date(22, 8, 22, 3, 0, 11, 500);

// // d = 'hi'

// let m = d.toString()

// console.log('toString: ' + m)

// let n = Date.parse(m)

// console.log('Date.parse: ' + n)

// console.log(isNaN(n))
