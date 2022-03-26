const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const T = input();
  for (let i = 0; i < T; i++) {
    const n = input();
    let tree = [];
    for (let i = 0; i < n - 1; i++) {
      const [a, b] = input().split(" ").map(Number);
      if (!tree[b]) tree[b] = [];
      tree[b].push(a);
    }
    const arr = input().split(" ").map(Number);
    let visited = [];
    console.log(bfs(arr));

    function bfs(arr) {
      let queue = [...arr];
      while (queue.length) {
        let node = queue.shift();
        if (visited[node]) return node;
        visited[node] = 1;
        if (!tree[node]) continue;
        tree[node].forEach((next) => queue.push(next));
      }
    }
  }
};

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
