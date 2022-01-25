const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

let count = 0;

function NQueen(N, k, arr) {
  if (k == N) {
    count++;
  } else {
    for (let i = 0; i < N; i++) {
      if (isAvailable(arr, i)) {
        arr.push(i);
        NQueen(N, k + 1, arr);
        arr.splice(arr.length - 1);
      }
    }
  }
  return count;
}

function isAvailable(arr, cand) {
  const row = arr.length;
  for (let i = 0; i < row; i++) {
    if (arr[i] == cand || row - i == Math.abs(arr[i] - cand)) {
      return false;
    }
  }
  return true;
}

console.log(NQueen(input(), 0, []));
