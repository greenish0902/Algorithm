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
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (goodNum(i, 0, N - 1)) count++;
  }
  console.log(count);
  process.exit();

  function goodNum(idx, L, R) {
    let sum = 0;
    while (L < R) {
      if (L == idx) L++;
      if (R == idx) R--;
      if (L >= R) return false;
      sum = arr[L] + arr[R];
      if (sum == arr[idx]) return true;
      if (sum < arr[idx]) {
        L++;
      } else {
        R--;
      }
    }
    return false;
  }
});
