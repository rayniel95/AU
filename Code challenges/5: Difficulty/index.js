const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    let block = { 
        id: blocks.length,
        transactions: mempool.splice(0, MAX_TRANSACTIONS),
        nonce: 0
    }
    blocks.push(block)
    // let nonce = 0
    // let hash = SHA256(JSON.stringify(block))
    block.hash = SHA256(JSON.stringify(block))

    while (BigInt(`0x${block.hash}`) >= TARGET_DIFFICULTY) {
        block.nonce++
        block.hash = SHA256(JSON.stringify(block))
    }
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};