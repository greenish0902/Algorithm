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
  const T = input();
  let result = [];
  for (let i = 0; i < T; i++) {
    // get input
    const [N, K] = input().split(" ").map(Number);
    let time = input().split(" ").map(Number);
    time.unshift(0);
    let arr = [];
    let degree = new Array(N + 1).fill(0);
    for (let i = 0; i < K; i++) {
      const elem = input().split(" ").map(Number);
      if (!arr[elem[0]]) arr[elem[0]] = [];
      arr[elem[0]].push(elem[1]);
      degree[elem[1]]++;
    }
    let W = input();

    // new queue
    let queue = [];
    let results = new Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
      if (degree[i] == 0) {
        queue.push(i);
        results[i] = time[i];
      }
    }

    // topological sort start
    while (queue.length) {
      const item = queue.shift();
      if (!arr[item]) continue;
      arr[item].forEach((elem) => {
        degree[elem]--;
        if (degree[elem] == 0) queue.push(elem);
        results[elem] = Math.max(results[item] + time[elem], results[elem]);
      });
    }
    result.push(results[W]);
  }
  console.log(result.join("\n"));
  process.exit();
});
