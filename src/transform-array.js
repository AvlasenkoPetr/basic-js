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
    // console.log('Начали работу с эл-том: ' + arr[i])

    if (arr[i] == '--discard-next') {
      if (i == arr.length - 1) continue
      // console.log('След эл-т будет удален')
      i++
    
    } else if (arr[i] == '--discard-prev') { 
      if (i == 0) continue;
      // console.log('Пред эл-т будет удален')
      resultArr.pop()

    } else if (arr[i] == '--double-next') {
      if (i == arr.length - 1) continue
      // console.log('След эл-т будет удвоен')
      resultArr.push(arr[i + 1])

    } else if (arr[i] == '--double-prev') {
      // console.log('Пред эл-т будет удовен')
      if (i == 0) continue;
      resultArr.push(resultArr[resultArr.length - 1])

    } else {
      resultArr.push(arr[i])
    }
  }
  // console.log('Изначальный массив: ' + arr)
  return resultArr;
}

let test = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]

console.log(transform(test))