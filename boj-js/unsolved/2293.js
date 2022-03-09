const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [n, k] = input().split(" ").map(Number);
  let candidate = [];
  for (let i = 0; i < n; i++) candidate.push(Number(input()));
  let dp = new Array(k + 1).fill(0);
  candidate.forEach((coin) => (dp[coin] = 1));
  dynamic();
  console.log(dp[k]);

  function dynamic() {
    candidate.forEach((coin) => {
      for (let num = 1; num <= k; num++) {
        if (num - coin <= 0) continue;
        dp[num] += dp[num - coin];
        if (candidate.includes(num - coin) && num - coin > coin) dp[num] -= 1;
      }
    });
  }
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
