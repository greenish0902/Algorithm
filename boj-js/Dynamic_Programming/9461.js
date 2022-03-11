const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  arr = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
  for (let i = 11; i <= 100; i++) arr[i] = arr[i - 1] + arr[i - 5];
  const T = input();
  for (let i = 0; i < T; i++) console.log(arr[input()]);
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
