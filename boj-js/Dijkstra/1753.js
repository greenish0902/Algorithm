const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(num, weight) {
    this.num = num;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(num, weight) {
    let node = new Node(num, weight);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let node = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentNode = this.values[parentIdx];
      if (node.weight >= parentNode.weight) break;
      this.values[parentIdx] = node;
      this.values[idx] = parentNode;
      idx = parentIdx;
    }
  }

  dequeue() {
    let first = this.values[0];
    let last = this.values[this.values.length - 1];
    this.values[0] = last;
    this.values[this.values.length - 1] = first;
    let node = this.values.pop();
    this.sinkDown();
    return node;
  }

  sinkDown() {
    let idx = 0;
    while (idx < this.values.length) {
      let node = this.values[idx];
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      if (leftIdx >= this.values.length) break;
      if (rightIdx >= this.values.length) rightIdx = leftIdx;
      let leftChild = this.values[leftIdx];
      let rightChild = this.values[rightIdx];
      if (leftChild.weight < node.weight && rightChild.weight < node.weight) {
        if (leftChild.weight < node.weight) {
          this.values[leftIdx] = node;
          this.values[idx] = leftChild;
          idx = leftIdx;
        } else {
          this.values[rightIdx] = node;
          this.values[idx] = rightChild;
          idx = rightIdx;
        }
      } else if (leftChild.weight < node.weight) {
        this.values[leftIdx] = node;
        this.values[idx] = leftChild;
        idx = leftIdx;
      } else if (rightChild.weight < node.weight) {
        this.values[rightIdx] = node;
        this.values[idx] = rightChild;
        idx = rightIdx;
      } else break;
    }
  }

  length() {
    return this.values.length;
  }
}

const solution = () => {
  const [V, E] = input().split(" ");
  const K = input();
  let graph = [];
  for (let i = 0; i < E; i++) {
    const [u, v, w] = input().split(" ").map(Number);
    if (!graph[u]) graph[u] = [];
    graph[u].push(new Node(v, w));
  }
  let dist = new Array(Number(V) + 1).fill(Infinity);
  const dijkstra = (start) => {
    let pq = new PriorityQueue();
    pq.enqueue(start, dist[start]);
    while (pq.length()) {
      let node = pq.dequeue();
      if (!graph[node.num]) continue;
      if (node.weight != dist[node.num]) continue;
      graph[node.num].forEach((nextNode) => {
        if (dist[node.num] + nextNode.weight >= dist[nextNode.num]) return;
        dist[nextNode.num] = dist[node.num] + nextNode.weight;
        pq.enqueue(nextNode.num, dist[nextNode.num]);
      });
    }
  };
  dist[K] = 0;
  dijkstra(K);
  for (let i = 0; i < V + 1; i++) if (dist[i] == Infinity) dist[i] = "INF";
  dist.shift();
  console.log(dist.join("\n"));
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
