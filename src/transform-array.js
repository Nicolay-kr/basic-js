const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  if(Object.prototype.toString.call(arr) !== '[object Date]'){
    const Rulls = {'--discard-next': {'func': discardNext},'--discard-prev': {'func': discardPrev},
                 '--double-next': {'func': doubleNext},'--double-prev': {'func': doublePrev}};

  function discardNext(i){
    if(i+1 == arr.length){
      newArr[i] = undefined;
      return 1;
    }else{return 2;}
    
  }
  function discardPrev(i){
    if(i-1 < 0){
      newArr[i] = undefined;
      return 1;
    }else{
      newArr.splice(i-1,1);
      return 1;
    }
    
  }
  function doubleNext(i){
    if(i+1 == arr.length){
      newArr[i] = undefined;
      return 1;
    }else{
      newArr.push(arr[i+1])
      return 1;
    }
    
  }
  function doublePrev(i){
    if(i-1 < 0){
      newArr[i] = undefined;
      return 1;
    }else{
      newArr.push(arr[i-1])
      return 1;
    }
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
// console.log(module.exports(['--double-prev', 1, 2, 3]))