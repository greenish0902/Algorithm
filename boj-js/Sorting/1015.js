const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [N, input] = fs.readFileSync(filePath).toString().split("\n");

let i = 0;
const arr = [];
input.split(" ").map((x) => {
  arr[i] = [Number(x), i];
  i++;
});

arr.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < N; i++) {
  arr[i].push(i);
}
arr.sort((a, b) => a[1] - b[1]);
console.log(arr.reduce((str, x) => (str += x[2] + " "), ""));
