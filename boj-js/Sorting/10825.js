const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

let cnt = 0;
const input = () => {
  return stdin[cnt++];
};

function compare(a, b) {
  if (a[1] != b[1]) return -(a[1] - b[1]);
  if (a[2] != b[2]) return a[2] - b[2];
  if (a[3] != b[3]) return -(a[3] - b[3]);
  return a[0] > b[0] ? 1 : -1;
}

const N = input();
const students = [];
for (let i = 0; i < N; i++) {
  students[i] = input().split(" ");
}
students.sort(compare);
console.log(students.reduce((str, student) => (str += student[0] + "\n"), ""));
