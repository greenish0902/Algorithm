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

  // push: add new node to the end of the linked list
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

  // pop: remove from the end
  pop() {
    let node = this.head;
    let prev = node;
    if (!node) return undefined;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }

  // shift: remove from the beginning
  shift() {
    if (!this.head) return undefined;
    let node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return node;
  }

  // unshift: add a new node to the beginning
  unshift(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // retrieve by its position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == index) return node;
      node = node.next;
    }
  }

  // set: change the value by its position
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.data = value;
    return true;
  }

  // insert: add at specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) return this.push(value);
    if (index == 0) return this.unshift(value);
    let prev = this.get(index - 1);
    let next = prev.next;
    prev.next = new Node(value);
    prev.next.next = next;
    this.length++;
    return true;
  }

  // remove: remove at specific position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index == 0) return this.shift();
    let prev = this.get(index - 1);
    let node = prev.next;
    prev.next = prev.next.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return node.data;
  }

  // reverse the linked list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // print every data in linked list
  print() {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr.join("\n"));
  }
}

// codes for testing
node1 = new Node(1);
node2 = new Node(2);
node1.next = node2;
head = node1;

console.log("node1", node1);
console.log("node2", node2);
console.log("head", head);

list = new SingleLinkedList();
console.log("list", list);
console.log("--push--");
list.push("00 hi");
list.push("01 hello");
list.push("02 goodbye");
list.push("03 byebye");
list.print();

console.log("--pop--");
list.pop();
list.print();

console.log("--shift--");
list.shift();
list.print();

list2 = new SingleLinkedList();
list2.push("00 hi");
list2.push("01 hello");
list2.push("02 goodbye");
list2.push("03 byebye");

console.log("--get--");
console.log(list2.get(0));
console.log(list2.get(1));
console.log(list2.get(2));
console.log(list2.get(3));

console.log("--set--");
console.log(list2.set(0, "new Hi"));
console.log(list2.set(1, "new Hello"));
console.log(list2.set(2, "new Bye"));
console.log(list2.set(3, "new ByeBye"));
list2.print();

console.log("--insert--");
list2.insert(4, "inserted");
list2.insert(1, "hey ~");
list2.print();

console.log("--remove--");
list2.remove(5);
list2.remove(1);
list2.print();

console.log("--reverse--");
list2.reverse();
list2.print();
