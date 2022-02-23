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
  let results = [];
  const T = input();
  // for testcases
  for (let i = 0; i < T; i++) {
    // get input
    const [M, N, K] = input().split(" ").map(Number);
    let field = new Array(N);
    let visited = new Array(N);
    for (let i = 0; i < N; i++) {
      field[i] = new Array(M).fill(0);
      visited[i] = new Array(M).fill(0);
    }
    for (let i = 0; i < K; i++) {
      const [X, Y] = input().split(" ").map(Number);
      field[Y][X] = 1;
    }
    // code run
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (field[i][j] && !visited[i][j]) {
          dfs(i, j);
          cnt++;
        }
      }
    }
    results.push(cnt);

    // function
    function dfs(row, col) {
      visited[row][col] = 1;
      for (let i = 0; i < 4; i++) {
        const nrow = row + dir[i][0];
        const ncol = col + dir[i][1];
        if (nrow < 0 || nrow >= N || ncol < 0 || ncol >= M) continue;
        if (field[nrow][ncol] && !visited[nrow][ncol]) dfs(nrow, ncol);
      }
    }
  }
  console.log(results.join("\n"));
  process.exit();
});
