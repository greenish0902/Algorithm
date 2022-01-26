const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, ...arr] = input;
  const points = [];
  for (let i = 0; i < N; i++) {
    const [x, y] = arr[i].split(" ").map(Number);
    if (!points[y]) points[y] = [];
    points[y].push(x);
  }

  let sum = 0;
  points.forEach((x) => {
    x.sort((a, b) => (a < b ? -1 : 1));
    sum = x.reduce((sum, cur, idx) => {
      lDist = idx > 0 ? cur - x[idx - 1] : Number.MAX_VALUE;
      rDist = idx != x.length - 1 ? x[idx + 1] - cur : Number.MAX_VALUE;
      return sum + Math.min(lDist, rDist);
    }, sum);
  });

  console.log(sum);

  process.exit();
});
