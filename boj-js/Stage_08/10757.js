const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

const solution = () => {
  let sum = BigInt(0);
  input().split(" ").map(x => {
    sum += BigInt(x)
  });
  console.log(sum.toString());
};

solution();
