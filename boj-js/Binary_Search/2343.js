const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const [N, M] = input().split(" ").map(Number);
  const arr = input().split(" ").map(Number);
  let max = Math.max(...arr);
  let L = max;
  let R = 1000000000;
  let result = R;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (groupCounter(mid) > M) {
      L = mid + 1;
    } else {
      result = mid;
      R = mid - 1;
    }
  }
  console.log(result);

  function groupCounter(max) {
    let cnt = 0;
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (sum + arr[i] > max) {
        sum = 0;
        cnt++;
      }
      sum += arr[i];
    }
    return ++cnt;
  }
}

let cnt = 0;
const input = () => stdin[cnt++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
