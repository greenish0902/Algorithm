const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = () => stdin[cnt++].split(" ").map(Number);

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const [N, X] = input();
  const arr = input();
  let max = -100;
  let sum = 0;
  let dur;

  for (let L = 0, R = 0; R < N; R++) {
    let len = R - L + 1;
    sum += arr[R];
    if (len < X) continue;
    if (sum > max) {
      max = sum;
      dur = 1;
    } else if (sum == max) dur++;
    sum -= arr[L];
    L++;
  }

  if (max) {
    console.log(max);
    console.log(dur);
  } else {
    console.log("SAD");
  }
  process.exit();
});
