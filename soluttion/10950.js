let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = parseInt(input[0]);

for (let i = 1; i <= value; i++) {
  let line = input[i].split(" ");
  let num1 = parseInt(line[0]);
  let num2 = parseInt(line[1]);
  console.log(num1 + num2);
}
