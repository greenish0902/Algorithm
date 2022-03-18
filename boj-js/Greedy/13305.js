const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = input();
  const distArr = input().split(" ").map(BigInt);
  const priceArr = input().split(" ").map(BigInt);
  let price = 1000000000n;
  return distArr.reduce((sum, dist, idx) => {
    if (BigInt(priceArr[idx]) < price) price = BigInt(priceArr[idx]);
    return BigInt(sum) + BigInt(dist) * price;
  }, 0n);
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  let result = solution();
  console.log(result.toString());
  process.exit();
});
