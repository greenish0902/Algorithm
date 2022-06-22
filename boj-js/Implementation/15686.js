const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const solution = () => {
  const [N, M] = input();
  let chickens = [];
  let houses = [];
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr[i] = input();
    arr[i].forEach((elem, idx) => {
      if (elem === 1) houses.push([i, idx]);
      else if (elem === 2) chickens.push([i, idx]);
    });
  }

  let cand = [];
  let selected = [];
  let used = [];
  rec(0, 0);

  function rec(k, startIdx) {
    if (k === M) return cand.push([...selected]);
    else {
      for (let i = startIdx; i < chickens.length; i++) {
        if (used[i]) continue;
        used[i] = 1;
        selected.push(chickens[i]);
        rec(k + 1, i);
        used[i] = 0;
        selected.splice(selected.length - 1);
      }
    }
  }

  let result = Infinity;
  for (let i = 0; i < cand.length; i++) {
    let dist = 0;
    houses.forEach(([hr, hc]) => {
      let temp = N * N;
      cand[i].forEach(([r, c]) => {
        temp = Math.min(temp, Math.abs(hr - r) + Math.abs(hc - c));
      });
      dist += temp;
    });
    result = Math.min(dist, result);
  }
  return result;
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
