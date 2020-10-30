const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if(Array.isArray(arr)) {
      let depth = 0;
      arr.forEach(elem => {
        let current = this.calculateDepth(elem);
        if(depth < current) {
          depth = current;
        }
      });
      return 1 + depth;
    } else {
      return 0;
    }
  }
};