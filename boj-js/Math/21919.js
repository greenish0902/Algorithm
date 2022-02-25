const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++];

const gcd = (a, b) => {
  let x, y;
  if (a > b) {
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }
  return x % y == 0 ? y : gcd(y, x % y);
};

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const N = input();
  const arr = input().split(" ").map(BigInt);
  let cand = [];
  let result = -1;
  arr.forEach((elem) => {
    if (isPrime(elem)) {
      cand.push(elem);
    }
  });
  if (cand.length) {
    result = cand[0];
    for (let i = 1; i < cand.length; i++) {
      result = (result * cand[i]) / gcd(result, cand[i]);
    }
  }
  console.log(result.toString());
  process.exit();
  function isPrime(num) {
    for (
      let i = BigInt(2);
      i <= BigInt(Math.trunc(Math.sqrt(Number(num))));
      i += BigInt(1)
    ) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
});
