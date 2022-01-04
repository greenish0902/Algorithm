const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

const solution = () => {
  let len = input();
  let result = "";
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};

solution();
