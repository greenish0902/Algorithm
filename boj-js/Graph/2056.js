const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = +input();
  const dp = [0];
  const graph = [];
  const visited = [1, 1];

  for (let i = 1; i <= N; i++) {
    const [time, len, ...nums] = input().split(" ").map(Number);
    dp[i] = time;
    graph[i] = nums;
  }
  for (let i = 1; i <= N; i++) dfs(i);
  console.log(Math.max(...dp));

  function dfs(node) {
    if (visited[node]) return dp[node];
    visited[node] = 1;
    if (graph[node].length === 0) return 0;
    if (!dp[node]) dp[node] = arr[i];
    const cand = [];
    graph[node].forEach((elem, idx) => {
      cand[idx] = dfs(elem);
      visited[elem] = 1;
    });
    dp[node] += Math.max(...cand);
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
