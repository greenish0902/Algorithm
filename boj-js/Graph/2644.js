const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  let n = input();
  let [start, end] = input().split(" ").map(Number);
  let inputs = input();

  let arr = [];
  let visited = [];
  let dist = [];
  for (let i = 0; i < inputs; i++) {
    let [i, j] = input().split(" ").map(Number);
    if (!arr[i]) arr[i] = [];
    if (!arr[j]) arr[j] = [];
    arr[i].push(j);
    arr[j].push(i);
  }
  dist[start] = 0;
  visited[start] = 1;
  dfs(start);
  console.log(dist[end] ?? -1);

  function dfs(node) {
    if (!arr[node]) return;
    arr[node].forEach((elem) => {
      if (visited[elem]) return;
      dist[elem] = dist[node] + 1;
      if (elem == end) return;
      visited[elem] = 1;
      dfs(elem);
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
