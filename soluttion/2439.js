let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = Number(input[0]);
let result = "";

for (let i = 0; i < value; i++) {
  for (let j = value - 1; j > i; j--) {
    result += " ";
  }
  for (let m = 0; m <= i; m++) {
    result += "*";
  }
  result += `\n`;
}
console.log(result);
