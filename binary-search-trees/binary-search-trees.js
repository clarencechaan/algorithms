class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  root;

  constructor(arr) {
    const normalizedArr = this.arrRemoveDuplicates(this.arrQuickSort(arr));
    this.root = this.buildTree(normalizedArr);
  }

  buildTree(arr) {
    if (!arr.length) return null;

    const mid = Math.round((arr.length - 1) / 2);
    const smaller = arr.slice(0, mid);
    const larger = arr.slice(mid + 1);
    return new Node(arr[mid], this.buildTree(smaller), this.buildTree(larger));
  }

  arrQuickSort(arr) {
    if (arr.length <= 1) return arr;
    else {
      const pivot = arr.at(-1);
      let smaller = [];
      let larger = [];
      for (const num of arr.slice(0, -1)) {
        if (num <= pivot) smaller.push(num);
        else larger.push(num);
      }
      return [
        ...this.arrQuickSort(smaller),
        pivot,
        ...this.arrQuickSort(larger),
      ];
    }
  }

  arrRemoveDuplicates(arr) {
    let result = [];
    for (const num of arr) {
      if (!result.includes(num)) result.push(num);
    }
    return result;
  }

  insert(value) {
    this.root = this.insertRec(value, this.root);
  }

  insertRec(value, root) {
    let node = root;
    if (!node) return new Node(value);
    else if (value <= node.data) node.left = this.insertRec(value, node.left);
    else if (value > node.data) node.right = this.insertRec(value, node.right);
    return node;
  }

  delete(value) {
    this.root = this.deleteRec(value, this.root);
  }

  deleteRec(value, root) {
    let node = root;
    if (node?.data === value) {
      if (!node.left && !node.right) return null;
      else if (!node.left != !node.right) return node.left || node.right;
      else if (node.left && node.right) return this.inorderSuccessor(node);
    } else if (value <= node.data) node.left = this.deleteRec(value, node.left);
    else if (value > node.data) node.right = this.deleteRec(value, node.right);
    return node;
  }

  // return inorder BST with root node deleted
  inorderSuccessor(root) {
    let node = root;
    let nextLargest = node.right;
    while (nextLargest.left) nextLargest = nextLargest.left;

    node.data = nextLargest.data;
    if (nextLargest === node.right) node.right = nextLargest.right;
    else node.right.left = nextLargest.right;

    return node;
  }

  find(value) {
    return this.findRec(value, this.root);
  }

  findRec(value, node) {
    if (!node) return null;
    else if (node.data === value) return node;
    else if (value <= node.data) return this.findRec(value, node.left);
    else if (value > node.data) return this.findRec(value, node.right);
  }

  levelOrder(fn) {
    return this.levelOrderRec(fn, [this.root]);
  }

  levelOrderRec(fn, queue) {
    if (!queue.length) return [];

    const newQ = [...queue];
    const node = newQ.shift();

    fn && fn(node);
    if (node.left) newQ.push(node.left);
    if (node.right) newQ.push(node.right);

    return [node.data, ...this.levelOrderRec(fn, newQ)];
  }

  inorder(fn) {
    return this.inorderRec(fn, this.root);
  }

  inorderRec(fn, node) {
    if (!node) return [];

    fn && fn(node);
    return [
      ...this.inorderRec(fn, node.left),
      node.data,
      ...this.inorderRec(fn, node.right),
    ];
  }

  preorder(fn) {
    return this.preorderRec(fn, this.root);
  }

  preorderRec(fn, node) {
    if (!node) return [];

    fn && fn(node);
    return [
      node.data,
      ...this.preorderRec(fn, node.left),
      ...this.preorderRec(fn, node.right),
    ];
  }

  postorder(fn) {
    return this.postorderRec(fn, this.root);
  }

  postorderRec(fn, node) {
    if (!node) return [];

    fn && fn(node);
    return [
      ...this.postorderRec(fn, node.left),
      ...this.postorderRec(fn, node.right),
      node.data,
    ];
  }

  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(value, root = this.root) {
    let node = root;
    let depth = 0;

    while (node) {
      if (node.data === value) return depth;
      else if (value <= node.data) node = node.left;
      else if (value > node.data) node = node.right;
      depth += 1;
    }

    return null;
  }

  isBalanced() {
    const minDepth = this.minDepth(this.root);
    const maxDepth = this.height(this.root);

    return maxDepth - minDepth <= 1;
  }

  minDepth(root) {
    let node = root;
    if (!node) return -1;

    return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
  }

  rebalance() {
    let arr = this.getArray(this.root);
    arr = this.arrRemoveDuplicates(this.arrQuickSort(arr));
    this.root = this.buildTree(arr);
  }

  getArray(root) {
    let node = root;
    if (!node) return [];
    return [
      ...this.getArray(node.left),
      node.data,
      ...this.getArray(node.right),
    ];
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (!node) return console.log("null");
    if (node?.right) {
      this.prettyPrint(
        node?.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node?.data}`);
    if (node?.left) {
      this.prettyPrint(
        node?.left,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}

export default Tree;
