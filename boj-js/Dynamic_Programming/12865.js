const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [N, K] = input().split(" ").map(Number);
  let arr = [];
  let dp = [];
  dp[0] = new Array(K + 1).fill(0);
  for (let i = 0; i < N; i++) {
    let [W, V] = input().split(" ").map(Number);
    arr.push([W, V]);
  }
  dynamic();
  console.log(dp[N][K]);

  function dynamic() {
    for (let i = 1; i <= N; i++) {
      dp[i] = [];
      dp[i][0] = 0;
      let weight = arr[i - 1][0];
      let value = arr[i - 1][1];
      for (let j = 1; j <= K; j++) {
        dp[i][j] = dp[i - 1][j];
        if (j - weight < 0) continue;
        let preValue = dp[i - 1][j - weight];
        dp[i][j] = Math.max(dp[i][j], preValue + value);
      }
    }
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
