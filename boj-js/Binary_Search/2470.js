const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++];

function binarySearch(arr, L, R, elem) {
  let result = L,
    mid;
  while (L <= R) {
    mid = Math.trunc((L + R) / 2);
    if (arr[mid] < elem) {
      result = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return result;
}

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const N = Number(input());
  let arr = input().split(" ").map(Number);
  let result = [],
    minSum = Infinity;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    idx = binarySearch(arr, i, N, -arr[i]);
    if (arr[i] + arr[idx] == 0) {
      result = [arr[i], arr[idx]];
      break;
    }
    if (arr[i] + arr[idx + 1] == 0) {
      result = [arr[i], arr[idx + 1]];
      break;
    }
    if (idx > N - 1) continue;
    if (i != idx && Math.abs(arr[i] + arr[idx]) < minSum) {
      minSum = Math.abs(arr[i] + arr[idx]);
      result = [arr[i], arr[idx]];
    }
    if (i != idx + 1 && Math.abs(arr[i] + arr[idx + 1]) < minSum) {
      minSum = Math.abs(arr[i] + arr[idx + 1]);
      result = [arr[i], arr[idx + 1]];
    }
  }
  console.log(result.sort((a, b) => a - b).join(" "));
  process.exit();
});
