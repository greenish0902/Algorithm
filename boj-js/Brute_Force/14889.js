const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = Number(input());
  let arr = [];
  for (let i = 0; i < N; i++) arr.push(input().split(" ").map(Number));
  let disc = Infinity;
  let used = new Array(N).fill(0);
  rec(0, 0);
  console.log(disc);

  function rec(k, startIdx) {
    if (k == N / 2) {
      disc = Math.min(getDisc(), disc);
      return;
    }
    for (let i = startIdx; i < N; i++) {
      if (used[i]) continue;
      used[i] = 1;
      rec(k + 1, i);
      used[i] = 0;
    }
  }

  function getDisc() {
    let team = [0, 0];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (used[i] != used[j]) continue;
        let score = arr[i][j] + arr[j][i];
        team[used[i]] += score;
      }
    }
    return Math.abs(team[0] - team[1]);
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
