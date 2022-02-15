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
  let [N, M] = input().split(" ");
  let unHeard = [];
  let unSeen = [];
  let nameList = [];
  for (let i = 0; i < N; i++) unHeard.push(input());
  for (let i = 0; i < M; i++) unSeen.push(input());
  unSeen.sort();
  unHeard.forEach((elem) => {
    binarySearch(0, M - 1, elem) ? nameList.push(elem) : 0;
  });
  console.log(nameList.length);
  console.log(nameList.sort().join("\n"));
  process.exit();

  function binarySearch(L, R, X) {
    let result = R;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (unSeen[mid] < X) {
        L = mid + 1;
      } else {
        result = mid;
        R = mid - 1;
      }
    }
    return unSeen[result] == X;
  }
});
