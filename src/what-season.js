const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // const springDate = new Date(2020, 02, 31)
  if(Object.prototype.toString.call(date) === '[object Date]'){
    let mount = date.getMonth();
    let season = ''
    let seasons =  [{season:'winter', mounts:[11,0,1]}, {season:'spring', mounts:[2,3,4]}, {season:'summer', mounts:[5,6,7]}, {season:'autumn', mounts:[8,9,10]}]
    for(let item of seasons){
      if(item.mounts.includes(mount)){
      season = item.season;
      }
    };
    console.log()
    return season
  }
  else if(date == undefined){
    return 'Unable to determine the time of year!'
  }
  else{
    return 'Error'
  }
  
};
// console.log(module.exports(new Date(1994, 1, 2, 3, 4, 5)))