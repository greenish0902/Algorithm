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
  const arr = new Array(N);
  let visited = new Array(N);
  let dist = new Array(N);
  let queue = [];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < N; i++) {
    arr[i] = input();
    visited[i] = new Array(M).fill(0);
    dist[i] = new Array(M).fill(10000);
  }

  console.log(bfs(0, 0));
  process.exit();

  function bfs(x, y) {
    queue.push([x, y]);
    visited[x][y] = 1;
    dist[x][y] = 1;
    while (queue.length > 0) {
      [qx, qy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        nx = qx + dir[i][0];
        ny = qy + dir[i][1];
        if (nx < 0 || nx > N - 1 || ny < 0 || ny > M - 1) continue;
        if (arr[nx][ny] == "1" && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
          dist[nx][ny] = Math.min(dist[qx][qy] + 1, dist[nx][ny]);
        }
        if (nx == N - 1 && ny == M - 1) return dist[nx][ny];
      }
    }
  }
});
