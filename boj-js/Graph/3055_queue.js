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

let cnt = 0;
const input = () => stdin[cnt++];
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  const [R, C] = input().split(" ").map(Number);
  let map = [];
  let dogTime = [];
  let waterTime = [];
  for (let i = 0; i < R; i++) {
    dogTime[i] = new Array(C).fill(-1);
    waterTime[i] = new Array(C).fill(-1);
    map[i] = input().split("");
  }

  bfsWater();
  console.log(bfs());
  process.exit();

  function bfsWater() {
    let queue = new Queue();
    let visited = [];
    for (let i = 0; i < R; i++) {
      visited[i] = [];
      for (let j = 0; j < C; j++) {
        if (map[i][j] == "*") {
          waterTime[i][j] = 0;
          queue.enqueue([i, j]);
        }
      }
    }
    while (queue.length()) {
      let [row, col] = queue.dequeue();
      visited[row][col] = 1;
      for (let i = 0; i < 4; i++) {
        let nrow = row + dir[i][0];
        let ncol = col + dir[i][1];
        if (nrow < 0 || nrow >= R || ncol < 0 || ncol >= C) continue;
        if (map[nrow][ncol] != ".") continue;
        if (visited[nrow][ncol]) continue;
        queue.enqueue([nrow, ncol]);
        waterTime[nrow][ncol] = waterTime[row][col] + 1;
        visited[nrow][ncol] = 1;
      }
    }
  }

  function bfs() {
    let queue = new Queue();
    let visited = [];
    for (let i = 0; i < R; i++) {
      visited[i] = [];
      for (let j = 0; j < C; j++) {
        if (map[i][j] == "S") {
          dogTime[i][j] = 0;
          queue.enqueue([i, j]);
          break;
        }
      }
    }
    while (queue.length()) {
      let [row, col] = queue.dequeue();
      visited[row][col] = 1;
      if (map[row][col] == "D") return dogTime[row][col];
      for (let i = 0; i < 4; i++) {
        let nrow = row + dir[i][0];
        let ncol = col + dir[i][1];
        if (nrow < 0 || nrow >= R || ncol < 0 || ncol >= C) continue;
        if (visited[nrow][ncol]) continue;
        if (map[nrow][ncol] != "." && map[nrow][ncol] != "D") continue;
        dogTime[nrow][ncol] = dogTime[row][col] + 1;
        if (
          waterTime[nrow][ncol] != -1 &&
          dogTime[nrow][ncol] >= waterTime[nrow][ncol]
        )
          continue;
        queue.enqueue([nrow, ncol]);
        visited[nrow][ncol] = 1;
      }
    }
    return "KAKTUS";
  }
});
