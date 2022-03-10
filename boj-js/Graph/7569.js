const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let node = this.first;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return node.value;
  }

  length() {
    return this.size;
  }
}

const dir = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

const solution = () => {
  let [M, N, H] = input().split(" ").map(Number);
  let arr = [];
  let queue = new Queue();
  let left = 0;
  let date = [];
  let visited = [];
  for (let i = 0; i < N; i++) {
    arr[i] = [];
    date[i] = [];
    visited[i] = [];
    for (let j = 0; j < M; j++) {
      arr[i][j] = [];
      date[i][j] = [];
      visited[i][j] = [];
    }
  }
  for (let i = 0; i < N * H; i++) {
    let line = input().trim().split(" ").map(Number);
    let row = i % N;
    let hei = Math.floor(i / N);
    line.forEach((item, col) => {
      arr[row][col].push(item);
      if (item == -1) return;
      else if (item == 0) left++;
      else if (item == 1) {
        visited[row][col][hei] = 1;
        queue.enqueue([row, col, hei]);
        date[row][col][hei] = 0;
      }
    });
  }
  if (left == 0) return 0;
  return bfs();

  function bfs() {
    while (queue.length() > 0) {
      let [row, col, height] = queue.dequeue();
      visited[row][col][height] = 1;
      for (let i = 0; i < dir.length; i++) {
        let nrow = row + dir[i][0];
        let ncol = col + dir[i][1];
        let nheight = height + dir[i][2];
        if (nrow < 0 || ncol < 0 || nheight < 0) continue;
        if (nrow >= N || ncol >= M || nheight >= H) continue;
        if (visited[nrow][ncol][nheight]) continue;
        if (arr[nrow][ncol][nheight] != 0) continue;
        // --- if successfully arrived ----
        let min = date[row][col][height] + 1;
        date[nrow][ncol][nheight] = min;
        left--;
        if (left == 0) return min; // final tomato
        queue.enqueue([nrow, ncol, nheight]);
        visited[nrow][ncol][nheight] = 1;
      }
    }
    return -1;
  }
};

let line = 0;
const input = () => stdin[line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  let result = solution();
  console.log(result);
  process.exit();
});
