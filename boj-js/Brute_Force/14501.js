const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = Number(input());
  let arr = [];

  for (let i = 1; i <= N; i++) arr[i] = input().split(" ").map(Number);
  let result = 0;
  for (let i = 1; i <= N; i++) {
    let cand = rec(i, 0);
    if (cand) result = Math.max(cand, result);
  }
  console.log(result);

  function rec(k, sum) {
    let ndateIdx = k + arr[k][0];
    if (ndateIdx == N + 1) sum += arr[k][1];
    if (ndateIdx > N) return sum;
    sum += arr[k][1];
    for (let i = ndateIdx; i <= N; i++) {
      let fin = rec(i, sum);
      if (fin) result = Math.max(fin, result);
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
