function d(n) {
  let result = 0;
  let str = n + "";
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  return result + n;
}

let selfNumber = new Array(10001).fill(true);

for (let i = 1; i <= 10000; i++) {
  let cur = d(i);
  if (cur <= 10000) {
    selfNumber[cur] = false;
  }
}

for (let i = 1; i <= 10000; i++) {
  if (selfNumber[i]) {
    console.log(i);
  }
}
