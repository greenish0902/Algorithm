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
  const N = input();
  let score = [];
  const arr = new Array(N);
  for (let i = 0; i < N; i++) {
    score.push(Number(input()));
  }
  arr[0] = [score[0], 0];
  arr[1] = [score[0] + score[1], score[1]];
  for (let i = 2; i < N; i++) {
    arr[i] = new Array(2);
    arr[i][0] = arr[i - 1][1] + score[i];
    arr[i][1] = Math.max(arr[i - 2][0], arr[i - 2][1]) + score[i];
  }
  console.log(Math.max(arr[N - 1][0], arr[N - 1][1]));
  process.exit();
});
