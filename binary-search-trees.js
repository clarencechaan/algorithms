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
    else {
      const mid = Math.round((arr.length - 1) / 2);
      const smaller = arr.slice(0, mid);
      const larger = arr.slice(mid + 1);
      return new Node(
        arr[mid],
        this.buildTree(smaller),
        this.buildTree(larger)
      );
    }
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

  insertRec(value, node) {
    if (!node) return new Node(value);
    else if (value <= node.data) node.left = this.insertRec(value, node.left);
    else if (value > node.data) node.right = this.insertRec(value, node.right);
    return node;
  }

  delete(value) {
    this.root = this.deleteRec(value, this.root);
  }

  deleteRec(value, node) {
    if (node?.data === value) {
      if (!node.left && !node.right) return null;
      else if (!node.left != !node.right) return node.left || node.right;
      else if (node.left && node.right) return this.inorderSuccessor(node);
    } else if (value <= node.data) node.left = this.deleteRec(value, node.left);
    else if (value > node.data) node.right = this.deleteRec(value, node.right);
    return node;
  }

  // return inorder BST with root node deleted
  inorderSuccessor(node) {
    let root = node;
    let nextLargest = root.right;
    while (nextLargest.left) nextLargest = nextLargest.left;

    root.data = nextLargest.data;
    if (nextLargest === root.right) root.right = nextLargest.right;
    else root.right.left = nextLargest.right;

    return root;
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

const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const bst2 = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// bst.insert(6);
// bst.delete(324);
// console.log(bst.find(9));
// bst2.prettyPrint();
// console.log(bst2.levelOrder((node) => {}));
