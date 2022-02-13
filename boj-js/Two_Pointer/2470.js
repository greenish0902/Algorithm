const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const N = input();
  const arr = input().split(" ").map(Number);
  let L = 0,
    R = N - 1;
  let sum = Infinity;
  let result = [];
  arr.sort((a, b) => a - b);

  while (L < R) {
    const temp = arr[L] + arr[R];
    if (Math.abs(temp) < sum) {
      sum = Math.abs(temp);
      result = [arr[L], arr[R]];
    }
    temp < 0 ? L++ : R--;
    if (temp == 0) break;
  }
  result.sort((a, b) => a - b);
  console.log(result.join(" "));
  process.exit();
});
