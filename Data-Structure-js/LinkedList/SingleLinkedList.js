class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let node = this.head;
    console.log(node.data);
    while (node != this.tail) {
      node = node.next;
      console.log(node.data);
    }
  }
}

node1 = new Node(1);
node2 = new Node(2);
node1.next = node2;
head = node1;

console.log("node1", node1);
console.log("node2", node2);
console.log("head", head);

list = new SingleLinkedList();
list.push("hello");
list.push("goodbye");
console.log("list", list);
list.print();
