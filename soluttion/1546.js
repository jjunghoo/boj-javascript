let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let score = input[1].split(" ").map((item) => Number(item));
let maxScore = -100;
let avgScore = 0;

for (let i = 0; i < n; i++) {
  if (maxScore <= score[i]) maxScore = score[i];
}

let updateScore = score.map((item) => (item / maxScore) * 100);
console.log(updateScore.reduce((a, b) => a + b) / n);
