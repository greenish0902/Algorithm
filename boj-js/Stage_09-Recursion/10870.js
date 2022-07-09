const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dp = [0, 1];
function func(n) {
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
}

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const n = Number(input());
  func(n);
  console.log(dp[n]);
  process.exit();
});
