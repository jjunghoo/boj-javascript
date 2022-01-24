let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = Number(input[0]);
let result = "";

for (let i = 1; i <= value; i++) {
  let line = input[i].split(" ");
  let num1 = Number(line[0]);
  let num2 = Number(line[1]);
  result += `Case #${i}: ${num1} + ${num2} = ${num1 + num2}\n`;
}
console.log(result);
