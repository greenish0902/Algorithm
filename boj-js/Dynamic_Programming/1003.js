const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution() {
  const T = input();
  let zeroCnt = [0, 0];
  let oneCnt = [0, 0];
  for (let i = 0; i <= 40; i++) {
    fibonacci(i);
  }
  let result = [];
  for (let i = 0; i < T; i++) {
    let elem = input();
    result.push(zeroCnt[elem] + " " + oneCnt[elem]);
  }
  console.log(result.join("\n"));

  function fibonacci(n) {
    if (n == 0) return zeroCnt[n]++;
    if (n == 1) return oneCnt[n]++;
    else {
      zeroCnt[n] = zeroCnt[n - 1] + zeroCnt[n - 2];
      oneCnt[n] = oneCnt[n - 1] + oneCnt[n - 2];
      return;
    }
  }
}

let line = 0;
function input() {
  return stdin[line++];
}

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
