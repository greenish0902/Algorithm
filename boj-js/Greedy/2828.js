const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [N, M] = input().split(" ").map(Number);
  let j = input();
  let L = 1;
  let R = L + M;
  let dist = 0;
  for (let i = 0; i < j; i++) {
    let nextIdx = Number(input());
    if (L <= nextIdx && nextIdx < R) continue;
    if (nextIdx < L) {
      let move = L - nextIdx;
      dist += move;
      L -= move;
      R -= move;
    } else if (nextIdx >= R) {
      let move = nextIdx + 1 - R;
      dist += move;
      L += move;
      R += move;
    }
  }
  console.log(dist);
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
