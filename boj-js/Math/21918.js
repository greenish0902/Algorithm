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
  const [N, M] = input().split(" ").map(Number);
  let state = input().split(" ").map(Number);
  for (let i = 0; i < M; i++) {
    const [a, b, c] = input().split(" ").map(Number);
    switch (a) {
      case 1:
        state[b - 1] = c;
        break;
      case 2:
        for (let i = b - 1; i < c; i++) state[i] = 1 - state[i];
        break;
      case 3:
        for (let i = b - 1; i < c; i++) state[i] = 0;
        break;
      case 4:
        for (let i = b - 1; i < c; i++) state[i] = 1;
        break;
    }
  }
  let result = [];
  state.forEach((elem) => result.push(elem));
  console.log(result.join(" "));
  process.exit();
});
