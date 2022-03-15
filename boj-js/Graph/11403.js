const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = Number(input());
  let graph = [];
  let result = [];
  for (let i = 0; i < N; i++) {
    graph[i] = [];
    let line = input().split(" ").map(Number);
    for (let j = 0; j < N; j++) if (line[j]) graph[i].push(j);
  }
  let visited = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    visited = new Array(N).fill(0);
    dfs(i);
    result.push(visited.join(" "));
  }
  function dfs(node) {
    if (!graph[node]) return;
    graph[node].forEach((elem) => {
      if (visited[elem]) return;
      visited[elem] = 1;
      dfs(elem);
    });
  }
  console.log(result.join("\n"));
};

let lineNum = 0;
const input = () => stdin[lineNum++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
