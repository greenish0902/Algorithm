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
  const n = input();
  const arr = input().split(" ").map(Number);
  const x = input();
  let cnt = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (binarySearch(0, n - 1, i)) cnt++;
  }
  console.log(cnt);
  process.exit();

  function binarySearch(L, R, idx) {
    let value = x - arr[idx];
    let result = -1;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (arr[mid] < value) {
        L = mid + 1;
      } else {
        result = mid;
        R = mid - 1;
      }
    }
    if (result <= idx) return false;
    return arr[result] == value;
  }
});
