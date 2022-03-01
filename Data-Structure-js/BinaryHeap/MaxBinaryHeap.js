class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let elem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= elem) break;
      this.values[index] = parent;
      this.values[parentIndex] = elem;
      index = parentIndex;
    }
  }

  remove() {
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
      if (leftChild > elem && rightChild > elem) {
        if (leftChild < rightChild) {
          this.values[index] = rightChild;
          this.values[rightIndex] = elem;
          index = rightIndex;
        } else {
          this.values[index] = leftChild;
          this.values[leftIndex] = elem;
          index = leftIndex;
        }
      } else if (leftChild > elem) {
        this.values[index] = leftChild;
        this.values[leftIndex] = elem;
        index = leftIndex;
      } else if (rightChild > elem) {
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
const heap = new MaxBinaryHeap();
console.log("heap", heap);

console.log("----- insert() -----");
heap.insert(1);
heap.insert(10);
heap.insert(1000);
heap.insert(100);
console.log("heap", heap);

console.log("----- remove() -----");
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log("heap", heap);
