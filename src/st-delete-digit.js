import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split('');
  console.log(arr)
  for (let i = 0; i < arr.length; i++){
    let clone = arr.slice(0)
    clone.splice(i, 1)
    let sum = +clone.join('')
    if (sum > max) {
      max = sum
    }
  }
  return +max
}
