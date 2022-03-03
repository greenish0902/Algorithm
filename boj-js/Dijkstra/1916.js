const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(val = null, priority = undefined) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
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

  bubbleUp() {
    let index = this.values.length - 1;
    let node = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentIdx];
      if (node.priority < parentNode.priority) {
        this.values[index] = parentNode;
        this.values[parentIdx] = node;
        index = parentIdx;
      } else break;
    }
  }

  sinkDown() {
    let index = 0;
    while (index < this.values.length) {
      let node = this.values[index];
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      if (leftIdx < 0 || leftIdx >= this.values.length) break;
      if (rightIdx < 0 || rightIdx >= this.values.length) rightIdx = leftIdx;
      let leftChild = this.values[leftIdx];
      let rightChild = this.values[rightIdx];
      if (
        leftChild.priority < node.priority &&
        rightChild.priority < node.priority
      ) {
        if (leftChild.priority < rightChild.priority) {
          this.values[index] = leftChild;
          this.values[leftIdx] = node;
          index = leftIdx;
        } else {
          this.values[index] = rightChild;
          this.values[rightIdx] = node;
          index = rightIdx;
        }
      } else if (leftChild.priority < node.priority) {
        this.values[index] = leftChild;
        this.values[leftIdx] = node;
        index = leftIdx;
      } else if (rightChild.priority < node.priority) {
        this.values[index] = rightChild;
        this.values[rightIdx] = node;
        index = rightIdx;
      } else return;
    }
  }

  length() {
    return this.values.length;
  }
}

const solution = () => {
  const N = input();
  const M = input();
  const graph = [];
  for (let i = 0; i < M; i++) {
    let arr = input().split(" ").map(Number);
    if (!graph[arr[0]]) graph[arr[0]] = { to: [], weight: [] };
    graph[arr[0]].to.push(arr[1]);
    graph[arr[0]].weight.push(arr[2]);
  }
  const [first, last] = input().split(" ").map(Number);

  let pq = new PriorityQueue();
  let dist = new Array(Number(N) + 1).fill(Infinity);
  dist[first] = 0;
  pq.enqueue(first, dist[first]);

  while (pq.length() > 0) {
    let node = pq.dequeue();
    if (!graph[node.val]) continue;
    if (dist[node.val] != node.priority) continue;
    let nodeLen = graph[node.val].to.length;
    for (let i = 0; i < nodeLen; i++) {
      let currentNode = node.val;
      let nextNode = graph[currentNode].to[i];
      let currentDist = dist[nextNode];
      let weight = graph[currentNode].weight[i];
      if (dist[currentNode] + weight >= currentDist) continue;
      dist[nextNode] = dist[currentNode] + weight;
      pq.enqueue(nextNode, dist[nextNode]);
    }
  }
  console.log(dist[last]);
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
