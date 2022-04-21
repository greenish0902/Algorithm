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
  const N = Number(input());
  let student = [];
  let seat = [];
  let inputArr = [];
  for (let i = 0; i < N; i++) seat[i] = [];
  for (let i = 0; i < N ** 2; i++) {
    let temp = input().split(" ").map(Number);
    inputArr[i] = temp[0];
    student[temp[0]] = [temp[1], temp[2], temp[3], temp[4]];
  }
  inputArr.forEach((num) => {
    let [r, c] = cond(num);
    seat[r][c] = num;
  });
  let result = getScore();
  console.log(result);

  function cond(num) {
    let result = adjacentChecker(num);
    if (result.length == 1) return result[0];
    result = emptyChecker(result);
    if (result.length == 1) return result[0];
    result = indexChecker(result);
    return result;
  }

  function adjacentChecker(num) {
    let result = [];
    let max = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (seat[i][j] > 0) continue;
        let cnt = 0;
        for (let k = 0; k < dir.length; k++) {
          let nr = i + dir[k][0];
          let nc = j + dir[k][1];
          if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
          if (!seat[nr][nc]) continue;
          if (student[num].includes(seat[nr][nc])) cnt++;
        }
        // 해당 위치에 대한 인접 계산이 완료되었으므로
        if (cnt < max) continue;
        if (cnt > max) result = []; // 아예 갱신되었으므로 비우기
        result.push([i, j]); // 후보에 더하기
        max = cnt;
      }
    }
    // 후보가 될 수 있는 칸들의 배열 반환 [[i, j], [i, j], ...]
    return result;
  }

  function emptyChecker(arr) {
    let result = [];
    let max = 0;
    if (arr.length == 0) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (seat[i][j] > 0) continue;
          arr.push([i, j]);
        }
      }
    }
    for ([r, c] of arr) {
      let cnt = 0;
      for (let i = 0; i < dir.length; i++) {
        let nr = r + dir[i][0];
        let nc = c + dir[i][1];
        if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
        if (seat[nr][nc] > 0) continue;
        cnt++;
      }
      if (cnt < max) continue;
      if (cnt > max) result = [];
      result.push([r, c]);
      max = cnt;
    }
    return result;
  }

  function indexChecker(arr) {
    arr.sort(([ar, ac], [br, bc]) => ac - bc);
    arr.sort(([ar, ac], [br, bc]) => ar - br);
    return arr[0];
  }

  function getScore() {
    let score = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let cnt = 0;
        for (let k = 0; k < dir.length; k++) {
          let nr = i + dir[k][0];
          let nc = j + dir[k][1];
          if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
          if (student[seat[i][j]].includes(seat[nr][nc])) cnt++;
        }
        if (cnt == 0) score += 0;
        else if (cnt == 1) score += 1;
        else if (cnt == 2) score += 10;
        else if (cnt == 3) score += 100;
        else if (cnt == 4) score += 1000;
      }
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
