let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const value = input[0].split(" ");
const a = parseInt(value[0]);
const b = parseInt(value[1]);
const c = parseInt(value[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
