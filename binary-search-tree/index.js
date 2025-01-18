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

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
        this.root = newNode;
        return this;
    }
    else {
        let current = this.root 
        while (true) {
            if (val === current.value) return undefined;
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else current = current.left;
            }
            else if (val > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else current = current.right;
            }
        }
    }
  }
  find(val) {
    if (this.root === null || !val) return false;

    let found = false;
    let current = this.root;

    while (current && !found) {
        if (val < current.value) current = current.left;
        else if (val > current.value) current = current.right;
        else found = true;
    }

    return current || found
  }
  // tree traversal
  // 01. breadth first search
  // 02. depth first search

  // 0.1 breadth first search
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data
  }

  // 0.2 depth first search - PreOrder
  DFSPreOrder() {
    const visitedNodes = []

    function traverse(node) {
      visitedNodes.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return visitedNodes
  }
}

const tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPreOrder());
