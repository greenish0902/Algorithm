const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const N = +input();
  const arr = input()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = +input();
  let max = 0;
  return search(arr[0], arr[N - 1]);

  function isMax(num) {
    let sum = 0;
    arr.forEach((elem) => {
      if (elem <= num) sum += elem;
      else sum += num;
    });
    if (sum > M) return false;
    if (sum > max) {
      max = sum;
      return true;
    } else return false;
  }

  function search(L, R) {
    let result = Math.floor(M / N);
    while (L <= R) {
      let mid = Math.floor((L + R) / 2);
      if (isMax(mid)) {
        result = mid;
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
    return result;
  }
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
