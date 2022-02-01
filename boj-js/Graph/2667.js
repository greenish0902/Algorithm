const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++];

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const N = Number(input());
  const arr = new Array(N);
  const visited = new Array(N);
  for (let i = 0; i < N; i++) {
    arr[i] = input();
    visited[i] = new Array(N).fill(0);
  }

  let count,
    total = 0,
    result = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] == "1" && !visited[i][j]) {
        total++;
        count = 0;
        dfs(i, j);
        result.push(count);
      }
    }
  }
  console.log(total);
  result.sort((a, b) => a - b).forEach((x) => console.log(x));

  function dfs(x, y) {
    visited[x][y] = 1;
    count++;
    for (let i = 0; i < 4; i++) {
      nx = x + dir[i][0];
      ny = y + dir[i][1];
      if (arr[nx] == undefined) continue;
      if (arr[nx][ny] == "1" && !visited[nx][ny]) dfs(nx, ny);
    }
  }
  process.exit();
});
