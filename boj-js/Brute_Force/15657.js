const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [N, M] = input();
  const arr = input().sort((a, b) => a - b);
  let results = [];
  let result = [];
  rec(0, 0);
  return results.map((result) => result.join(" ")).join("\n");

  function rec(k, startIdx) {
    if (k === M) return results.push([...result]);
    else {
      for (let i = startIdx; i < N; i++) {
        result.push(arr[i]);
        rec(k + 1, i);
        result.splice(result.length - 1);
      }
    }
  }
};

let _line = 0;
const input = () => stdin[_line++].split(" ").map(Number);

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  console.log(solution());
  process.exit();
});
