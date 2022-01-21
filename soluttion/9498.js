let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const value = parseInt(input[0]);

if (value > 89) {
  console.log("A");
} else if (value > 79) {
  console.log("B");
} else if (value > 69) {
  console.log("C");
} else if (value > 59) {
  console.log("D");
} else {
  console.log("F");
}
