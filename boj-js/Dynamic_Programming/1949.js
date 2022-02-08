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
  const N = Number(input());
  const val = input().split(" ").map(Number);
  let arr = new Array(N + 1),
    linkedList = new Array(N + 1);

  for (let i = 1; i < N; i++) {
    temp = input().split(" ");
    if (!linkedList[temp[0]]) linkedList[temp[0]] = [];
    if (!linkedList[temp[1]]) linkedList[temp[1]] = [];
    linkedList[temp[0]].push(temp[1]);
    linkedList[temp[1]].push(temp[0]);
  }
  for (i = 1; i <= N; i++) arr[i] = new Array(2).fill(0);

  dfs(1, -1);
  console.log(Math.max(...arr[1]));
  process.exit();

  function dfs(node, parent) {
    arr[node][1] = val[node - 1];
    for (const child of linkedList[node]) {
      if (child == parent) continue;
      dfs(child, node);
      arr[node][0] += Math.max(...arr[child]);
      arr[node][1] += arr[child][0];
    }
  }
});
