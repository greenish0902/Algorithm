const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const [N, M] = input().split(" ").map(Number);
  let inDegree = new Array(N + 1).fill(0);
  let visited = new Array(N + 1).fill(0);
  let graph = [];
  for (let i = 0; i < M; i++) {
    let arr = input().split(" ").map(Number);
    if (!graph[arr[1]]) graph[arr[1]] = [];
    graph[arr[1]].push(arr[0]);
    inDegree[arr[1]]++;
  }
  const X = input();
  let result = [];
  dfs(X);
  console.log(result.length - 1);
  process.exit();

  function dfs(node) {
    visited[node] = 1;
    result.push(node);
    if (inDegree[node] == 0) return;
    graph[node].forEach((elem) => {
      if (visited[elem]) return;
      visited[elem] = 1;
      dfs(elem);
    });
  }
});
