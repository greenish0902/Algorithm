const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const T = input();
  let result = [];
  for (let i = 0; i < T; i++) {
    const N = input();
    let visited = [];
    let dist = [];
    for (let i = 0; i < N; i++) {
      visited[i] = [];
      dist[i] = [];
    }
    const start = input().split(" ").map(Number);
    const end = input().split(" ").map(Number);
    let queue = [];
    queue.push(start);
    dist[start[0]][start[1]] = 0;
    visited[start[0]][start[1]] = 1;
    bfs();
    result.push(dist[end[0]][end[1]]);

    function bfs() {
      while (queue.length > 0) {
        let [row, col] = queue.shift();
        if (row == end[0] && col == end[1]) break;
        visited[row][col] = 1;
        if ([row, col] == end) break;
        for (let i = 0; i < 8; i++) {
          let nrow = row + dir[i][0];
          let ncol = col + dir[i][1];
          if (nrow < 0 || ncol < 0 || nrow >= N || ncol >= N) continue;
          if (visited[nrow][ncol]) continue;
          visited[nrow][ncol] = 1;
          dist[nrow][ncol] = dist[row][col] + 1;
          if (nrow == end[0] && ncol == end[1]) break;
          queue.push([nrow, ncol]);
        }
      }
    }
  }
  console.log(result.join("\n"));
};

let line = 0;
const input = () => stdin[line++];
const dir = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
