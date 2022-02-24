const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++].split(" ").map(Number);
const getCand = (node) => [node - 1, node + 1, node * 2];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  let [node, fin] = input();
  let queue = [node];
  console.log(bfs());
  process.exit();

  function bfs() {
    if (node == fin) return 0;
    let time = [];
    let visited = [];
    time[node] = 0;
    visited[node] = 1;
    while (queue.length) {
      node = queue.shift();
      const cand = getCand(node);
      for (let i = 0; i < 3; i++) {
        const elem = cand[i];
        if (visited[elem] || elem < 0 || elem > 100000) continue;
        visited[elem] = 1;
        time[elem] = time[node] + 1;
        if (elem == fin) return time[fin];
        queue.push(elem);
      }
    }
  }
});
