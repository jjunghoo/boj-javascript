let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let line1 = Number(input[0].split(" ")[0]);
let line2 = Number(input[0].split(" ")[1]);
let result = "";

let numbers = input[1].split(" ").map((number) => Number(number));

numbers.forEach((number) => {
  if (number < line2) {
    result += `${number} `;
  }
});

console.log(result);
