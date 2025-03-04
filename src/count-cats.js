import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let cats = 0;
  for (let i = 0; i < matrix.length; i++) {
    let newArr = matrix[i];
    for (let j = 0; j < newArr.length; j++) {
      if (typeof(newArr[j]) != 'string') {
        continue
      }
      if (newArr[j].length == 2 && newArr[j].includes('^^')) {
        cats += 1;
      }
    }
  }
  return cats;
}