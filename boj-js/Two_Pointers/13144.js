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
  let result = 0;
  const count = new Array(100000 + 1).fill(0);
  for (let L = 0, R = 0; L < N; L++) {
    while (R < N && count[arr[R]] == 0) {
      count[arr[R++]]++;
    }
    count[arr[L]] = 0;
    result += R - L;
  }
  console.log(result);
  process.exit();
});
