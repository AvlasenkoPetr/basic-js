import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        i += 1;
        continue;

      case '--discard-prev':
        resultArr.pop();
        continue;

      case '--double-next':
        resultArr.push(arr[i+1])
        continue;

      case '--double-prev':
        if (i = 0) {
         continue;
        }
        resultArr.push(resultArr[resultArr.length - 1])
        
      default: resultArr.push(arr[i])
    }



    // if (arr[i] == '--discard-next') {
    //   i += 1;

    // } else if (arr[i] == '--discard-prev') {
    //   resultArr.pop()

    // } else if (arr[i] == '--double-next') {
    //   resultArr.push(arr[i+1])

    // } else if (arr[i] == '--double-prev') {
    //   if (i = 0) {
    //     continue;
    //   } else {
    //   resultArr.push(resultArr[resultArr.length - 1])
    //   }
    // } else {
    //   resultArr.push(arr[i])
    // }
  }
  return resultArr;
}

let test = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]

// // console.log(test[3])

// let newArr = []

// newArr.pop()

console.log(transform(test))