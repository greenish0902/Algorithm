const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const N = fs.readFileSync(filePath).toString().trim();

function rec(n) {
  if (n == 0 || n == 1) return 1;
  return n * rec(n - 1);
}

console.log(rec(N));
