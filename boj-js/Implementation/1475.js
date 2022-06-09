const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = input();
  let numbers = { ...new Array(10).fill(0) };
  N.split("").forEach((num) => numbers[num]++);
  const ceil = Math.ceil((numbers[6] + numbers[9]) / 2);
  return Math.max(...Object.values({ ...numbers, 6: ceil, 9: ceil }));
};

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  console.log(solution());
  process.exit();
});
