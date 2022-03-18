const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = Number(input());
  const arr = input().split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let prev = 0;
  let result = arr.reduce((sum, now) => {
    sum += prev + now;
    prev += now;
    return sum;
  }, 0);
  console.log(result);
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
