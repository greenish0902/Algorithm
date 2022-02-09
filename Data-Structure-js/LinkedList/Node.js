class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

node1 = new Node(1);
node2 = new Node(2);
node1.next = node2;
head = node1;

console.log("node1", node1);
console.log("node2", node2);
console.log("head", head);
