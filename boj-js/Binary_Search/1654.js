const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [K, N] = input().split(" ").map(Number);
  let cables = [];
  for (let i = 0; i < K; i++) cables.push(Number(input()));
  let L = 1;
  let R = 10000000000;
  let result = binarySearch();
  console.log(result);

  function binarySearch() {
    let result = L;
    while (L <= R) {
      let mid = Math.floor((L + R) / 2);
      if (cableCut(mid) >= N) {
        result = mid;
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
    return result;
  }

  function cableCut(len) {
    return cables.reduce((sum, cable) => sum + Math.floor(cable / len), 0);
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
