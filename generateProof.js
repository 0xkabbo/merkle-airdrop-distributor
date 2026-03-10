const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

// Example data
const elements = [
    { addr: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", amount: "100" },
    { addr: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", amount: "200" }
];

const leaves = elements.map(x => 
    ethers.solidityPackedKeccak256(["address", "uint256"], [x.addr, x.amount])
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);

// Example: Get proof for the first user
const leaf = leaves[0];
const proof = tree.getHexProof(leaf);
console.log("Proof for User 1:", proof);
