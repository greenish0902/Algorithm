const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stdin = [];
let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

const binarySearch = (arr, L, R, elem) => {
  let result = L,
    mid;
  while (L <= R) {
    mid = Math.trunc((L + R) / 2);
    if (arr[mid] < elem) {
      result = mid + 1;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return result;
};

rl.on("line", (line) => {
  stdin.push(line);
}).on("close", () => {
  let T = input();
  while (T--) {
    const [N, M] = input().split(" ").map(Number);
    const A = input().split(" ").map(Number);
    const B = input().split(" ").map(Number);
    B.sort((a, b) => a - b);
    console.log(
      A.reduce((sum, elem) => {
        const result = binarySearch(B, 0, M - 1, elem);
        return sum + result;
      }, 0)
    );
  }
  process.exit();
});
