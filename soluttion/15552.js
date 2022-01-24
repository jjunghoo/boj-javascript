let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let value = Number(input[0]);
let sum = "";

for (let i = 1; i <= value; i++) {
  let line = input[i].split(" ");
  let num1 = Number(line[0]);
  let num2 = Number(line[1]);
  sum += `${num1 + num2}\n`;
}
console.log(sum);
