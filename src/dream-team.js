const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let team = []
  if(Object.prototype.toString.call(members) !== '[object Array]'){
    return false
  }
  for (let name of members){
    if(typeof name === 'string'){
      name = name.trim();
      team.push(name[0].toUpperCase());
    }
  }
  team.sort();
  team = team.join('')
  return team
};
// console.log(module.exports(['  olivia', 1111, ' Lily', 'Oscar', true, null]))