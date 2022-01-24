let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = Number(input[0]);
let sum = "";

for (let i = 1; i <= value; i++) {
  sum += `${i}\n`;
}
console.log(sum);
