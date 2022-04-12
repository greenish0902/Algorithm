const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const [n, m] = input();
  const arr = input();
  let scores = new Array(n + 1).fill(0);
  let tree = [];
  arr.forEach((elem, idx) => {
    if (idx == 0) return;
    if (!tree[elem]) tree[elem] = [];
    tree[elem].push(idx + 1);
  });
  for (let i = 0; i < m; i++) {
    let [idx, score] = input();
    scores[idx] += score;
  }
  dfs(1);
  scores.splice(0, 1);
  console.log(scores.join(" "));

  function dfs(node) {
    if (!tree[node]) return;
    tree[node].forEach((child) => {
      scores[child] += scores[node];
      dfs(child);
    });
  }
}

let _line = 0;
const input = () => stdin[_line++].split(" ").map(Number);

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
