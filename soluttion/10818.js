let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = input[0];
let data = input[1].split(" ").map((item) => Number(item));
let min = 1000000;
let max = -1000000;

for (let i = 0; i < n; i++) {
  if (data[i] < min) min = data[i];
  if (data[i] > max) max = data[i];
}

console.log(min, max);
