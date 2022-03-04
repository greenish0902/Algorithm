const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  let DP = [];
  for (let m = 1; m < 30; m++) {
    DP[m] = [];
    for (let n = 1; n <= m; n++) {
      DP[m][n] = pro(m, n);
    }
  }

  const T = input();
  let result = [];
  for (let i = 0; i < T; i++) {
    let [N, M] = input().split(" ").map(Number);
    result.push(DP[M][N]);
  }
  console.log(result.join("\n"));

  function pro(M, N) {
    if (M == N) return 1;
    if (N == 1) return M;
    return DP[M - 1][N - 1] + DP[M - 1][N];
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
