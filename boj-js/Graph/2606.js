const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = input();
  const k = input();
  let arr = [];
  let visited = [];
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    let [i, j] = input().split(" ").map(Number);
    if (!arr[i]) arr[i] = [];
    if (!arr[j]) arr[j] = [];
    arr[i].push(j);
    arr[j].push(i);
  }
  visited[1] = 1;
  dfs(1);
  console.log(cnt);

  function dfs(node) {
    if (!arr[node]) return;
    arr[node].forEach((elem) => {
      if (visited[elem]) return;
      visited[elem] = 1;
      cnt++;
      dfs(elem);
    });
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
