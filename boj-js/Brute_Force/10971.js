const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = +input();
  const arr = [];
  for (let i = 0; i < N; i++) arr[i] = input().split(" ").map(Number);

  let min = 10 ** 10;
  let visited = [];
  visited[0] = 1;
  rec(0, 0, 0);
  console.log(min);

  function rec(k, i, sum) {
    if (k + 1 == N) {
      return arr[i][0] === 0 ? 0 : (min = Math.min(min, sum + arr[i][0]));
    } else {
      for (let j = 0; j < N; j++) {
        if (visited[j]) continue;
        if (arr[i][j] === 0) continue;
        visited[j] = 1;
        rec(k + 1, j, sum + arr[i][j]);
        visited[j] = 0;
      }
    }
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
