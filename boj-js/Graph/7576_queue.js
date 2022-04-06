const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(data = null, next) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor(data) {
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
}

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const solution = () => {
  let [m, n] = input().split(" ").map(Number);
  let arr = [];
  let dist = [];
  let queue = new Queue();
  let visited = [];
  let tomato = m * n;
  for (let i = 0; i < n; i++) {
    arr[i] = input().split(" ").map(Number);
    visited[i] = [];
    dist[i] = [];
    arr[i].forEach((elem, col) => {
      if (elem == 0) return;
      else if (elem == -1) tomato--;
      else {
        queue.enqueue([i, col]);
        visited[i][col] = 1;
        dist[i][col] = 0;
        tomato--;
      }
    });
  }

  let max = 0;
  if (tomato) bfs();
  else console.log(0);

  function bfs() {
    while (queue.size > 0) {
      let [row, col] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        let nrow = row + dir[i][0];
        let ncol = col + dir[i][1];
        if (nrow < 0 || nrow >= n || ncol < 0 || ncol >= m) continue;
        if (arr[nrow][ncol] == -1) continue;
        if (visited[nrow][ncol]) continue;
        if (arr[nrow][ncol] == 0) tomato--;
        visited[nrow][ncol] = 1;
        dist[nrow][ncol] = dist[row][col] + 1;
        max = dist[nrow][ncol];
        queue.enqueue([nrow, ncol]);
      }
    }
    tomato == 0 ? console.log(max) : console.log(-1);
  }
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
