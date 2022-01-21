let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let minute = parseInt(input[0].split(" ")[1]);

if (minute >= 45) {
  minute = minute - 45;
} else {
  minute = 60 + (minute - 45);
  hour = hour - 1;
  if (hour < 0) {
    hour = 23;
  }
}

console.log(hour, minute);
