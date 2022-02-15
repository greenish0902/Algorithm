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
  const arr = input().split(" ").map(Number);
  const erase = input();
  let tree = [];
  let root = 0;
  let cnt = 0;
  arr.forEach((elem, idx) => {
    if (elem == -1) {
      root = idx;
      return;
    }
    if (!tree[elem]) tree[elem] = [];
    tree[elem].push(idx);
  });

  const result = dfs(root);
  console.log(result);
  process.exit();

  function dfs(node) {
    if (root == erase) return 0;
    if (!tree[node]) {
      cnt++;
      return;
    }
    tree[node].forEach((elem) => {
      if (elem == erase) {
        if (tree[node].length == 1) cnt++;
        return;
      }
      dfs(elem);
    });
    return cnt;
  }
});
