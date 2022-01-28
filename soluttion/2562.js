let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = input.map((item) => Number(item));
let max = 0;

for (let i = 0; i < input.length; i++) {
  if (n[i] > max) max = n[i];
}

console.log(max);
console.log(n.indexOf(max) + 1);
