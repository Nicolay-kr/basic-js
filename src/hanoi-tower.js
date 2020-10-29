const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let rod1 = [];
  let rod2 = [];
  let rod3 = [];

  for(let disk = disksNumber; disk > 0; disk-- ){
    rod1.push(disk);
  }
  let disks = rod1.length;
  let take = 0;
  let count = 0;
  while(rod2.length !== disks){
    while (rod3.length !== 0){
      take = rod3.pop();
      if(rod2[rod2.length-1]-1 == take){
        rod2.push(take);
        take = 0;
        count += 1;
      }else{
        rod1.push(take);
        take = 0;
        count += 1;
      }
    }
    while (rod3.length !== 0){
      take = rod3.pop();
      if(rod1.length == 0 || take < rod1[-1]){
        rod1.push(take);
        take = 0;
        count += 1;
      }else{
        rod3.push(take);
        take = 0;
        count += 1;
      }
    }
    while (rod1.length !== 0){
      take = rod1.pop();
      // if(rod2.length == 0 || take < rod2[rod2.length-1]){
      if(rod2.length == 0){
        rod2.push(take);
        take = 0;
        count += 1;
      }
      else if(rod3.length == 0 || take < rod3[-1]){
        rod3.push(take);
        take = 0;
        count += 1;
      }
      else{
        rod1.push(take);
        take = rod2.pop();
        if(take < rod3[rod3.length-1]){
          rod3.push(take);
          take = 0;
          count += 1;
        }
        else{
          rod2.push(take);
          take = 0;
          break
        }
        
      }
      
    }
  }

  return count
};
console.log(module.exports(4))
