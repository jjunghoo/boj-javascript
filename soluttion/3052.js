let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = input.map((item) => Number(item));
let set = new Set();
for (let i = 0; i < 10; i++) {
  set.add(value[i] % 42);
}

console.log(set.size);
