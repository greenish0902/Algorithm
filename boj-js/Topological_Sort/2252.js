const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++].split(" ").map(Number);

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  let [N, M] = input();
  let linkedList = new Array(N + 1);
  let degree = new Array(N + 1).fill(0);

  while (M--) {
    arr = input();
    degree[arr[1]]++;
    !linkedList[arr[0]]
      ? (linkedList[arr[0]] = [arr[1]])
      : linkedList[arr[0]].push(arr[1]);
  }

  let queue = [];
  degree.forEach((deg, idx) => {
    if (idx == 0) return;
    if (deg == 0) queue.push(idx);
  });

  let elem,
    result = [];
  while (queue.length > 0) {
    elem = queue.shift();
    result.push(elem);
    if (!linkedList[elem]) continue;
    linkedList[elem].forEach((item) => {
      degree[item]--;
      if (degree[item] == 0) queue.push(item);
    });
  }
  console.log(result.join(" "));
  process.exit();
});
