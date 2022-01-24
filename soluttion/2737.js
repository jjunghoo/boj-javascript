let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let value = parseInt(input[0].split(" ")[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${value} * ${i} = ${value * i}`);
}
