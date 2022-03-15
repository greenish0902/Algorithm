const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
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
    return ++this.length;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first == this.last) this.last = null;
    let node = this.first;
    this.first = this.first.next;
    this.length--;
    return node.value;
  }
}

const solution = () => {
  const [R, C] = input().split(" ").map(Number);
  let arr = [];
  let visited = [];
  for (let i = 0; i < R; i++) {
    visited[i] = [];
    arr.push(input().split(""));
  }

  let wolf, sheep;
  let result = [0, 0];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] == "o" || arr[i][j] == "v") {
        if (visited[i][j]) continue;
        (sheep = 0), (wolf = 0);
        if (arr[i][j] == "o") sheep++;
        else if (arr[i][j] == "v") wolf++;
        visited[i][j] = 1;
        bfs([i, j]);
        if (sheep <= wolf) sheep = 0;
        else wolf = 0;
        result[0] += sheep;
        result[1] += wolf;
      }
    }
  }
  console.log(result.join(" "));

  function bfs(init) {
    let queue = new Queue();
    queue.enqueue(init);
    while (queue.length) {
      let [row, col] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        let nrow = row + dir[i][0];
        let ncol = col + dir[i][1];
        if (nrow < 0 || ncol < 0 || nrow >= R || ncol >= C) continue;
        if (visited[nrow][ncol]) continue;
        let elem = arr[nrow][ncol];
        if (elem == "#") continue;
        if (elem == "v") wolf++;
        if (elem == "o") sheep++;
        visited[nrow][ncol] = 1;
        queue.enqueue([nrow, ncol]);
      }
    }
  }
};

let line = 0;
const input = () => stdin[line++];
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
  solution();
  process.exit();
});
