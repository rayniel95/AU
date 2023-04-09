const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block("ray likes arle") ];
    }
    addBlock(block){
        if (this.chain.length > 0) {
            block.previousHash = this.chain.slice(-1)[0].toHash()
        }
        this.chain.push(block)
    }
}

module.exports = Blockchain;