const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    this.arr.push(`( ${(value)} )`);
    return chainMaker
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(position > this.arr.length || position <= 0 || typeof position != 'number' ){
      throw 'Error'
    }
    this.arr.splice(position-1,1)
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return chainMaker
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    this.arr = this.arr.reverse();
    // remove line with error and write your code here
    return chainMaker
  },
  finishChain() {
    this.arr = this.arr.join('~~')
    // throw new CustomError('Not implemented');
    return this.arr

  }
};

module.exports = chainMaker;
console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());
// assert.deepEqual(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(),
//  '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');

// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()