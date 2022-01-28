let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let a = input[0];
let b = input[1];
let c = input[2];
let value = `${a * b * c}`;

let result = new Array(10).fill(0);

for (let i = 0; i < value.length; i++) {
  result[value[i]]++;
}

result.forEach((item) => console.log(item));
