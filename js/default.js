const Web3 = require("web3");

// Initiate web3 provider
const web3 = new Web3('https://cloudflare-eth.com');

// Get DOM elements
let ethBlockTime = document.getElementById('eth_block_time');
let ethBlockNumber = document.getElementById('eth_block_number');
let ethBlockHash = document.getElementById('eth_block_hash');
let ethBlockDifficulty = document.getElementById('eth_block_difficulty');
let ethData = document.getElementById('eth_data');

async function getCurrentBlock() {
    let blockNumber = await web3.eth.getBlockNumber();
    let block = await web3.eth.getBlock(blockNumber);
    ethBlockTime.textContent = 'Time: ' + block.timestamp;
    ethBlockNumber.textContent = 'Block: ' + blockNumber.toString();
    ethBlockHash.textContent = 'Hash: ' + block.hash;
    ethBlockDifficulty.textContent = 'Difficulty: ' + block.difficulty;
}

getCurrentBlock();

