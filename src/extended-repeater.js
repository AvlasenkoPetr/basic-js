import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) { 
  let strToRepeat = str;
  
  if (options.addition) {
    let resultAdd
    let arr = []; 
    arr.push(options.addition);

    if (options.additionRepeatTimes) {
      arr.length = options.additionRepeatTimes
      arr.fill(options.addition) 

      if (options.additionSeparator) {
        resultAdd = arr.join(options.additionSeparator)
      } else {
        resultAdd = arr.join('|')
      }
    }

    strToRepeat = str + resultAdd
  }

  let resultStr

  if(options.repeatTimes){
    let newArr = [];
    newArr.push(strToRepeat);
    newArr.length = options.repeatTimes;
    newArr.fill(strToRepeat)

    if(options.separator){
      resultStr = newArr.join(options.separator)
    } else {
      resultStr = newArr.join('+')
    }
  }

  return resultStr
}

let obj = {
  repeatTimes: 2,
  separator: '--',
  addition: 'sup',
  additionRepeatTimes: 3,
  additionSeparator: '**',
};

let obj1 = { repeatTimes: 5 }

let str = 'la'

console.log(repeater(str, obj1))
