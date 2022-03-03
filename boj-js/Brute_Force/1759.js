const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = () => {
  const [L, C] = input().split(" ").map(Number);
  const candidate = input().split(" ").sort();
  let results = [];
  let result = [];
  let used = [];
  recFunc(0, 0);
  console.log(results.join("\n"));

  function recFunc(k, idx) {
    if (k == L) {
      if (isAvaliable(result)) return result.join("");
      return 0;
    } else {
      for (let i = idx; i < C; i++) {
        if (used[i]) continue;
        used[i] = 1;
        result.push(candidate[i]);
        let sol = recFunc(k + 1, i + 1);
        if (sol) results.push(sol);
        result.splice(result.length - 1);
        used[i] = 0;
      }
    }
  }

  function isAvaliable(arr) {
    let cnt1 = 0;
    let cnt2 = 0;
    for (let i = 0; i < L; i++) {
      let elem = arr[i];
      if (["a", "e", "i", "o", "u"].includes(elem)) cnt1++;
      else cnt2++;
      if (cnt1 >= 1 && cnt2 >= 2) return true;
    }
    return false;
  }
};

let cnt = 0;
const input = () => stdin[cnt++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  solution();
  process.exit();
});
