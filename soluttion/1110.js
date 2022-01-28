let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let line = Number(input[0]);

let start = line;
let count = 0;

while (true) {
  line = "" + line;

  if (line.length === 1) {
    line = "0" + line;
  }

  let sum = Number(line[0]) + Number(line[1]);
  line = Number(line[1]) * 10 + (sum % 10);

  count++;
  if (line === start) {
    break;
  }
}

console.log(count);
