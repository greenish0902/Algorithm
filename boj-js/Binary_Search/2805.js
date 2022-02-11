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
  const [N, M] = input().split(" ").map(Number);
  const arr = input().split(" ").map(Number);
  arr.sort((a, b) => a - b);
  binarySearch(0, 2000000000);

  function binarySearch(L, R) {
    let result = R;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (sumTreeLen(mid)) {
        result = mid;
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
    console.log(result);
  }

  function sumTreeLen(start) {
    let sum = 0;
    arr.forEach((elem) => {
      if (elem > start) sum += elem - start;
    });
    return sum >= M;
  }
});
