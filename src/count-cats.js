const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
  let count = 0;
  for (let i of matrix){
    for(let j of i){
      j == '^^' ? count += 1 : count += 0;
    }
  }
  return count
};
// console.log(module.exports([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, '^^'] ]))