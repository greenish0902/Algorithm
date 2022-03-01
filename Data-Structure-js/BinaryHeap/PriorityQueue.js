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

  bubbleUp() {
    let index = this.values.length - 1;
    let elem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority <= elem.priority) break;
      this.values[index] = parent;
      this.values[parentIndex] = elem;
      index = parentIndex;
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
    let index = 0;
    while (index < this.values.length) {
      let elem = this.values[index];
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      if (leftIndex >= this.values.length) break;
      if (rightIndex >= this.values.length) rightIndex = leftIndex;
      let leftChild = this.values[leftIndex];
      let rightChild = this.values[rightIndex];
      if (
        leftChild.priority < elem.priority &&
        rightChild.priority < elem.priority
      ) {
        if (leftChild.priority < rightChild.priority) {
          this.values[index] = leftChild;
          this.values[leftIndex] = elem;
          index = leftIndex;
        } else {
          this.values[index] = rightChild;
          this.values[rightIndex] = elem;
          index = rightIndex;
        }
      } else if (leftChild.priority < elem.priority) {
        this.values[index] = leftChild;
        this.values[leftIndex] = elem;
        index = leftIndex;
      } else if (rightChild.priority < elem.priority) {
        this.values[index] = rightChild;
        this.values[rightIndex] = elem;
        index = rightIndex;
      } else {
        break;
      }
    }
  }
}

console.log("----- constructor() -----");
const queue = new PriorityQueue();
console.log("queue", queue);

console.log("----- enqueue() -----");
queue.enqueue(1, 3);
queue.enqueue(1000, 10);
queue.enqueue(100, 1);
queue.enqueue(10, 4);
queue.enqueue(12, 15);
queue.enqueue(12, 100);
queue.enqueue(12, 14);
queue.enqueue(50, 2);
console.log("queue", queue);

console.log("----- dequeue() -----");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("queue", queue);
