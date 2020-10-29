const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity !== 'string'){
    return false
  }
  sampleActivity = parseFloat(sampleActivity);
  console.log(sampleActivity);
  if(isNaN(sampleActivity) || (sampleActivity > 15 || sampleActivity <= 0)){
    return false
  }
  else{
    let t = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD/0.693;
    return Math.ceil(t)
  } 
  
};
// console.log(module.exports('15.1'))