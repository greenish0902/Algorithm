const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++].split(" ").map(Number);

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  let [N, M, V] = input();
  const adj = new Array(N + 1);

  while (M--) {
    const [i, j] = input();
    if (!adj[i]) adj[i] = [];
    if (!adj[j]) adj[j] = [];
    adj[i].push(j);
    adj[j].push(i);
  }

  for (let i = 0; i < N + 1; i++) {
    if (adj[i]) adj[i].sort((a, b) => a - b);
  }

  let result = "";
  let visited = new Array(N + 1).fill(0);
  dfs(V);

  result += "\n";
  visited.fill(0);
  let queue = [];
  bfs(V);
  console.log(result);

  function dfs(x) {
    visited[x] = true;
    result += x + " ";
    if (adj[x]) {
      adj[x].forEach((item) => {
        if (!visited[item]) dfs(item);
      });
    }
  }

  function bfs(root) {
    let visited = new Array(N + 1).fill(0);
    queue.push(root);
    visited[root] = true;
    while (queue.length > 0) {
      let x = queue.shift();
      result += x + " ";
      if (adj[x]) {
        adj[x].forEach((item) => {
          if (!visited[item]) {
            queue.push(item);
            visited[item] = true;
          }
        });
      }
    }
  }
  process.exit();
});
