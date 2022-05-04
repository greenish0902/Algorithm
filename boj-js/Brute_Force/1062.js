const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  let arr = [];
  let cand = [];
  const [N, letters] = input().split(" ").map(Number);
  if (letters < 5) {
    console.log(0);
    process.exit();
  }

  for (let i = 0; i < N; i++) {
    let temp = input();
    if (temp.length == 8) continue;
    temp
      .slice(4, temp.length - 4)
      .split("")
      .forEach((char) => {
        if ("acint".includes(char)) return;
        if (!arr[i]) arr[i] = "";
        arr[i] += char;
        if (cand.includes(char)) return;
        cand.push(char);
      });
  }
  if (cand.length <= letters - 5) {
    console.log(N);
    process.exit();
  }
  let result = 0;
  let used = [];
  arr = arr.filter((elem) => elem);
  rec(0);
  if (arr.length < N) result += N - arr.length;
  console.log(result);

  function rec(k) {
    if (k == letters - 5) {
      result = Math.max(evaluate(), result);
      return;
    }
    for (let i = 0; i < cand.length; i++) {
      let char = cand[i];
      if (used[char.charCodeAt(0)]) return;
      used[char.charCodeAt(0)] = 1;
      rec(k + 1);
      used[char.charCodeAt(0)] = 0;
    }
  }

  function evaluate() {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
      let words = arr[i].split("");
      let add = true;
      for (let j = 0; j < words.length; j++) {
        if (!used[words[j].charCodeAt(0)]) {
          add = false;
          break;
        }
      }
      if (add) score++;
    }
    return score;
  }
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
