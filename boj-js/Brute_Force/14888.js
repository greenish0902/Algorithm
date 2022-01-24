// const fs = require("fs");
// const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
// const stdin = fs.readFileSync(filePath).toString().split("\n");

// let cnt = 0;
// const input = () => {
//   return stdin[cnt++];
// };

const N = input();
const nums = input()
  .split(" ")
  .map((x) => parseInt(x));
const operators = input()
  .split(" ")
  .map((x) => parseInt(x));

function calculator(calculated, oper, newVal) {
  switch (oper) {
    case 0:
      return calculated + newVal;
    case 1:
      return calculated - newVal;
    case 2:
      return calculated * newVal;
    case 3:
      return Math.trunc(calculated / newVal);
    default:
      throw Error;
  }
}

let max = -1000000000,
  min = 1000000000;

function recFunc(k, value) {
  if (k == N - 1) {
    max = Math.max(max, value);
    min = Math.min(min, value);
  } else {
    for (let i = 0; i < 4; i++) {
      if (operators[i] > 0) {
        operators[i]--;
        recFunc(k + 1, calculator(value, i, nums[k + 1]));
        operators[i]++;
      }
    }
  }
  return [max, min];
}

console.log(recFunc(0, nums[0]).join("\n"));
