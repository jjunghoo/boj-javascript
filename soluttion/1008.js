let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const value = input[0].split(" ");
const a = parseInt(value[0]);
const b = parseInt(value[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
