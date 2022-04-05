const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [n, k] = input().split(" ").map(Number);

  let arr = [];
  let dp = [];
  for (let i = 0; i < n; i++) {
    let temp = Number(input());
    arr[i] = temp;
    dp[temp] = 1;
  }
  arr.sort((a, b) => a - b);
  arr = arr.filter((_, i) => {
    if (arr[i - 1] == arr[i]) return false;
    return true;
  });

  for (let i = arr[0]; i <= k; i++) {
    arr.forEach((elem) => {
      let prevIdx = i - elem;
      if (!dp[prevIdx]) return;
      if (dp[i]) dp[i] = Math.min(dp[i], dp[prevIdx] + 1);
      else dp[i] = dp[prevIdx] + 1;
    });
  }

  dp[k] ? console.log(dp[k]) : console.log(-1);
};

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
