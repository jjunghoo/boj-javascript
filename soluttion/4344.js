let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map((item) => Number(item));
  let total = 0;
  for (let j = 1; j < line.length; j++) {
    total += line[j];
  }

  let avg = total / line[0];

  let count = 0;

  for (let k = 1; k < line.length; k++) {
    if (avg < line[k]) {
      count += 1;
    }
  }
  console.log(`${((count / line[0]) * 100).toFixed(3)}%`);
}
