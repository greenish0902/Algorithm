const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

const [N, S] = input().split(" ").map(Number);
const nums = input().split(" ").map(Number);

let ans = 0;
function recFunc(k, value) {
  if (k == N) {
    if (value == S) {
      ans++;
    }
  } else {
    recFunc(k + 1, value + nums[k]);
    recFunc(k + 1, value);
  }
  return ans;
}

console.log(S == 0 ? recFunc(0, 0) - 1 : recFunc(0, 0));
