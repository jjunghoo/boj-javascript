let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const line = input[0].split(" ");
const line1 = parseInt(line[0]);
const line2 = parseInt(line[1]);

if (line1 < line2) {
  console.log("<");
} else if (line1 > line2) {
  console.log(">");
} else {
  console.log("==");
}
