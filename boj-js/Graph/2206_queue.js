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
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const solution = () => {
  const [N, M] = input().split(" ");
  const arr = [];
  const dist = [];
  for (let i = 0; i < N; i++) {
    dist[i] = [];
    for (let j = 0; j < M; j++) dist[i][j] = [-1, -1];
    arr[i] = input().split("").map(Number);
  }
  dist[0][0] = [1, -1];
  bfs();
  return Math.min(...dist[N - 1][M - 1]) === -1
    ? Math.max(...dist[N - 1][M - 1])
    : Math.min(...dist[N - 1][M - 1]);

  // bfs로 순회
  // 이미 벽을 뚫었으면 [1]에, 아니면 [0] 에 최단 거리를 저장
  function bfs() {
    let queue = new Queue();
    queue.enqueue([0, 0]);
    while (queue.length() > 0) {
      let [x, y] = queue.dequeue();
      if (x === N - 1 && y === M - 1) return;
      for (let d = 0; d < dir.length; d++) {
        let nx = x + dir[d][0];
        let ny = y + dir[d][1];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (dist[nx][ny][0] !== -1 && dist[nx][ny][1] !== -1) continue;
        if (arr[nx][ny] === 1) {
          if (dist[x][y][0] !== -1) {
            if (dist[nx][ny][1] !== -1 && dist[x][y][0] + 1 >= dist[nx][ny][1])
              continue; // 갱신 조건
            dist[nx][ny][1] = dist[x][y][0] + 1;
          } else continue;
        } else {
          let cond = 0;
          if (dist[x][y][0] !== -1) {
            if (
              !(dist[nx][ny][0] !== -1 && dist[x][y][0] + 1 >= dist[nx][ny][0])
            ) {
              dist[nx][ny][0] = dist[x][y][0] + 1;
              cond++;
            }
          }
          if (dist[x][y][1] !== -1) {
            if (
              !(dist[nx][ny][1] !== -1 && dist[x][y][1] + 1 >= dist[nx][ny][1])
            ) {
              dist[nx][ny][1] = dist[x][y][1] + 1;
              cond++;
            }
          }
          if (cond === 0) continue; // 갱신 조건
        }
        queue.enqueue([nx, ny]);
      }
    }
  }
};

let _line = 0;
const input = () => stdin[_line++];

let stdin = [];
rl.on("line", function (line) {
  stdin.push(line);
}).on("close", function () {
  console.log(solution());
  process.exit();
});
