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
  const X = input();

  let results = [];
  for (let i = 0; i < N; i++) if (gcd(arr[i], X) == 1) results.push(arr[i]);
  let avg = results.reduce((sum, elem) => sum + elem) / results.length;
  console.log(avg);
  process.exit();

  function gcd(a, b) {
    let x, y;
    if (a < b) {
      x = b;
      y = a;
    } else {
      x = a;
      y = b;
    }
    return x % y ? gcd(y, x % y) : y;
  }
});
