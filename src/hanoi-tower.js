const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let steps = Math.pow(2, disksNumber) - 1;
  let speed = Math.floor((60 * steps) / (turnsSpeed / 60));
  return {turns: steps, seconds: speed}
};
console.log(module.exports(9,4308))
