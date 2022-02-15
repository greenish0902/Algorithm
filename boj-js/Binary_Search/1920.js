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
  const A = input().split(" ").map(Number);
  const M = input();
  const arr = input().split(" ").map(Number);
  let results = [];
  A.sort((a, b) => a - b);
  for (let i = 0; i < M; i++) {
    binarySearch(0, N - 1, arr[i]) ? results.push(1) : results.push(0);
  }
  console.log(results.join("\n"));

  process.exit();
  function binarySearch(L, R, X) {
    let result = -1;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (A[mid] < X) {
        L = mid + 1;
      } else {
        result = mid;
        R = mid - 1;
      }
    }
    return A[result] == X;
  }
});
