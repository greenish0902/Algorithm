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
  let cards = input().split(" ").map(Number);
  const M = input();
  const arr = input().split(" ").map(Number);
  let results = [];
  let leftIdx, rightIdx;

  cards.sort((a, b) => a - b);
  arr.forEach((elem) => {
    leftIdx = leftSearch(0, N - 1, elem);
    rightIdx = rightSearch(0, N - 1, elem);
    results.push(rightIdx - leftIdx);
  });
  console.log(results.join(" "));
  process.exit();

  function leftSearch(L, R, X) {
    let result = R + 1;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (cards[mid] < X) {
        L = mid + 1;
      } else {
        result = mid;
        R = mid - 1;
      }
    }
    return result;
  }

  function rightSearch(L, R, X) {
    let result = R + 1;
    while (L <= R) {
      let mid = Math.trunc((L + R) / 2);
      if (cards[mid] > X) {
        result = mid;
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    }
    return result;
  }
});
