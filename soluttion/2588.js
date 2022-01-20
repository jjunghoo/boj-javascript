let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const line1 = parseInt(input[0]);
const line2 = parseInt(input[1]);

console.log(line1 * input[1][2]);
console.log(line1 * input[1][1]);
console.log(line1 * input[1][0]);
console.log(line1 * line2);
