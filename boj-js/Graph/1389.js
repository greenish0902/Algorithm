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
  const [N, M] = input();
  let graph = [];
  let visited = [];
  let results = [];
  let sum = [];
  for (let i = 1; i <= N; i++) {
    results[i] = new Array(N + 1).fill(0);
  }
  for (let i = 0; i < M; i++) {
    const arr = input();
    if (!graph[arr[0]]) graph[arr[0]] = [];
    if (!graph[arr[1]]) graph[arr[1]] = [];
    graph[arr[0]].push(arr[1]);
    graph[arr[1]].push(arr[0]);
  }
  for (let i = 1; i <= N; i++) {
    visited = [];
    bfs(i, i);
    sum[i - 1] = results[i].reduce((sum, elem) => sum + elem, 0);
  }
  console.log(sum.indexOf(Math.min(...sum)) + 1);
  process.exit();
  function bfs(init, val) {
    let queue = [val];
    while (queue.length) {
      let node = queue.shift();
      visited[node] = 1;
      graph[node].forEach((elem) => {
        if (!visited[elem]) {
          visited[elem] = 1;
          results[init][elem] = results[init][node] + 1;
          queue.push(elem);
        }
      });
    }
  }
});
