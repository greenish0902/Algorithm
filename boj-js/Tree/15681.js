const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [N, R, Q] = input().split(" ").map(Number);
  let tree = [];
  for (let i = 0; i < N - 1; i++) {
    let arr = input().split(" ").map(Number);
    if (!tree[arr[0]]) tree[arr[0]] = [];
    if (!tree[arr[1]]) tree[arr[1]] = [];
    tree[arr[0]].push(arr[1]);
    tree[arr[1]].push(arr[0]);
  }

  let result = [];
  let visited = [];
  visited[R] = 1;
  result[R] = 0;
  dfs(R, 0);

  let results = [];
  for (let i = 0; i < Q; i++) {
    let node = input();
    results.push(result[node]);
  }
  console.log(results.join("\n"));

  function dfs(node) {
    let cnt = 1;
    tree[node].forEach((next) => {
      if (visited[next]) return;
      visited[next] = 1;
      let sum = dfs(next);
      cnt += sum;
    });
    if (!result[node]) result[node] = 0;
    result[node] += cnt;
    return cnt;
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
