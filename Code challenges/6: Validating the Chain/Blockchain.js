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
    isValid(){
        return this.chain.every(
            (value, index, array)=>{
                if (index === 0) {
                    return true
                }
                return array[index-1].toHash().toString() === value.previousHash.toString()
            }
        )
    }
}

module.exports = Blockchain;