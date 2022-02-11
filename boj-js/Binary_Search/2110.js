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
  const [N, C] = input().split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < N; i++) arr.push(Number(input()));
  arr.sort((a, b) => a - b);
  console.log(binarySearch(0, 1000000000));
  process.exit();

  function binarySearch(L, R) {
    let result = arr[L];
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (isAvailable(mid)) {
        result = mid;
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
    return result;
  }

  function isAvailable(dist) {
    let count = 1;
    let last = arr[0];
    for (let i = 1; i < N; i++) {
      if (arr[i] - last < dist) continue;
      last = arr[i];
      count++;
    }
    return count >= C;
  }
});
