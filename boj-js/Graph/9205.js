const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const t = input();
  let result = [];
  for (let caseNum = 0; caseNum < t; caseNum++) {
    const n = Number(input());
    let arr = [];
    let graph = [];
    let visited = [];

    for (let i = 0; i < n + 2; i++) {
      graph[i] = [];
      arr.push(input().split(" ").map(Number));
    }

    for (let i = 0; i < n + 2; i++) {
      for (let j = i + 1; j < n + 2; j++) {
        if (getDist(arr[i], arr[j]) <= 20 * 50) {
          graph[i].push(j);
          graph[j].push(i);
        }
      }
    }

    visited[0] = 1;
    dfs(0);
    if (visited[n + 1] == 1) result[caseNum] = "happy";
    else result[caseNum] = "sad";

    function dfs(node) {
      if (!graph[node]) return;
      graph[node].forEach((elem) => {
        if (visited[elem]) return;
        visited[elem] = 1;
        if (elem == n + 1) return;
        dfs(elem);
      });
    }
  }
  console.log(result.join("\n"));

  function getDist(coord01, coord02) {
    return (
      Math.abs(coord01[0] - coord02[0]) + Math.abs(coord01[1] - coord02[1])
    );
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
