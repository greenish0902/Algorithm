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
  const str = input();
  let arr = [];
  let cnt = 0;
  let maxLen = -10;
  for (let L = 0, R = 0; R < str.length; R++) {
    if (!arr[str[R].charCodeAt(0) - 97]) arr[str[R].charCodeAt(0) - 97] = 0;
    if (arr[str[R].charCodeAt(0) - 97] == 0) cnt++;
    arr[str[R].charCodeAt(0) - 97]++;
    if (cnt > N) {
      arr[str[L].charCodeAt(0) - 97]--;
      if (arr[str[L].charCodeAt(0) - 97] == 0) cnt--;
      L++;
    }
    maxLen = Math.max(maxLen, R - L + 1);
  }
  console.log(maxLen);
  process.exit();
});
