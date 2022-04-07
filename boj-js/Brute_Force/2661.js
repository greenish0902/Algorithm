const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 1 12 123 1231 12312 123121 1231213
const solution = () => {
  const N = input();
  let results = [];
  let str = "";
  rec(0);
  console.log(results[0]);

  function rec(k) {
    if (k == N) return results.push(str);
    for (let i = 1; i <= 3; i++) {
      if (str.slice(str.length - 1) == i) continue;
      str += i;
      if (goodChecker(str)) rec(k + 1);
      str = str.slice(0, str.length - 1);
    }
  }

  function goodChecker(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 1; i < len; i++) {
      if (
        str.slice(str.length - i) ==
        str.slice(str.length - i * 2, str.length - i)
      )
        return false;
    }
    return true;
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
