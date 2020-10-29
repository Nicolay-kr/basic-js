const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  if(Object.prototype.toString.call(arr) !== '[object Date]'){
    const Rulls = {'--discard-next': {'func': discardNext},'--discard-prev': {'func': discardPrev},
                 '--double-next': {'func': doubleNext},'--double-prev': {'func': doublePrev}};

  function discardNext(i){
    return 2;
  }
  function discardPrev(i){
    newArr.splice(i-1,1);
    return 1;
  }
  function doubleNext(i){
    newArr.push(arr[i+1])
    return 1;
  }
  function doublePrev(i){
    newArr.push(arr[i-1])
    return 1;
  }
  let i = 0;
  while(i < arr.length ){
                         
    if(arr[i] in Rulls){
      i += Rulls[arr[i]]['func'](i);
    }
    else{newArr.push(arr[i]);
      i += 1;
    }
  }
  return newArr
  }else{
    return 'Error'
  }
}
console.log(module.exports([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))