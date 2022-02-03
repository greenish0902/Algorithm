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
  let linkedList = new Array(N + 1);
  let parents = new Array(N + 1);
  for (let i = 0; i < N + 1; i++) linkedList[i] = new Array();
  for (let i = 0; i < N - 1; i++) {
    let arr = input().split(" ").map(Number);
    linkedList[arr[0]].push(arr[1]);
    linkedList[arr[1]].push(arr[0]);
  }
  dfs(1, -1);
  parents.shift();
  parents.shift();
  console.log(parents.join("\n"));
  process.exit();

  function dfs(node, parent) {
    for (const child of linkedList[node]) {
      if (child == parent) continue;
      parents[child] = node;
      dfs(child, node);
    }
  }
});
