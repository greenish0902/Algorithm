class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.root;
    while (current) {
      if (current.value == node) return undefined;
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
    current = node;
    return this;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.left.right = new Node(7);
console.log("tree", tree);
console.log("tree.root.left", tree.root.left);

// insert method
console.log("---insert---");
tree.insert(3);
console.log("tree", tree);
console.log("tree.root.left", tree.root.left);
