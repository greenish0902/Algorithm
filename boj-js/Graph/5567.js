const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const n = input();
  const m = input();
  let graph = new Array(n + 1);
  let dist = new Array(n + 1);
  let visited = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
    dist[i] = 0;
  }
  let findOne = false;
  for (let i = 0; i < m; i++) {
    const arr = input().split(" ").map(Number);
    graph[arr[0]].push(arr[1]);
    graph[arr[1]].push(arr[0]);
    if (arr.includes(1)) findOne = true;
  }
  if (!findOne) return 0;
  let queue = [1];
  visited[1] = 1;
  return bfs();

  function bfs() {
    let cnt = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (!graph[node]) break;
      graph[node].forEach((elem) => {
        if (visited[elem]) return;
        visited[elem] = 1;
        dist[elem] = dist[node] + 1;
        if (dist[elem] > 2) return;
        queue.push(elem);
        cnt++;
      });
    }
    return cnt;
  }
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  console.log(solution());
  process.exit();
});
