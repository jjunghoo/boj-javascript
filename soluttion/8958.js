let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let score = 0;
  let length = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      score += length + 1;
      length += 1;
    } else {
      length = 0;
    }
  }
  console.log(score);
}
