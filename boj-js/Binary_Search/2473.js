const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = input();
  const arr = input().split(" ").map(Number);
  let result;
  arr.sort((a, b) => a - b);
  let minSum = 10000000000;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      sum = arr[i] + arr[j];
      let idx = binSearch(arr, 0, N - 1, -sum);
      if (idx == i || idx == j) continue;
      if (Math.abs(sum + arr[idx]) < minSum) {
        minSum = Math.abs(sum + arr[idx]);
        result = [arr[i], arr[j], arr[idx]];
      }
      if (idx - 1 == i || idx - 1 == j) continue;
      if (Math.abs(sum + arr[idx - 1]) < minSum) {
        minSum = Math.abs(sum + arr[idx - 1]);
        result = [arr[i], arr[j], arr[idx - 1]];
      }
    }
  }
  console.log(result.sort((a, b) => a - b).join(" "));
  process.exit();
};

const binSearch = (arr, L, R, X) => {
  let result = R;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (arr[mid] < X) {
      L = mid + 1;
    } else {
      result = mid;
      R = mid - 1;
    }
  }
  return result;
};

let cnt = 0;
const input = () => stdin[cnt++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
});
