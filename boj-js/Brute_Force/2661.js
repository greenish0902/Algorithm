const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const N = input();
  rec(0, "");

  function rec(k, str) {
    if (k == N) {
      console.log(str);
      process.exit();
    } else {
      for (let i = 1; i <= 3; i++) {
        if (isGood(str + i)) rec(k + 1, str + i);
      }
    }
  }

  function isGood(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 1; i <= len; i++) {
      if (
        str.slice(str.length - i * 2, str.length - i) ==
        str.slice(str.length - i)
      )
        return false;
    }
    return true;
  }
});
