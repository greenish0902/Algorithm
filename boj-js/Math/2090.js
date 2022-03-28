const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  input();
  const arr = input().split(" ").map(BigInt);
  let mul = arr.reduce((sum, elem) => {
    if (sum % elem == 0 || elem % sum == 0) {
      if (sum > elem) return sum;
      return BigInt(elem);
    }
    return sum * elem;
  }, 1n);
  let sum = arr.reduce((sum, elem) => sum + mul / BigInt(elem), 0n);
  const gcd = getGCD(mul, sum);
  console.log(mul / gcd + "/" + sum / gcd);

  function getGCD(x, y) {
    let a = x;
    let b = y;
    if (x < y) (a = y), (b = x);
    let r = a % b;
    if (r == 0n) return b;
    return getGCD(b, r);
  }
};

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
