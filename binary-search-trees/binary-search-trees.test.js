import Tree from "./binary-search-trees.js";

// create BST from array of random numbers
let arr = [];
for (let i = 0; i < 25; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
const bst = new Tree(arr);
console.log("CREATE BST: ");
bst.prettyPrint();

// confirm tree is balanced
console.log(
  bst.isBalanced() ? "PASS: Tree is balanced" : "FAIL: Tree is not balanced"
);

// print all elements in level, pre, post, and in order
console.log("LEVEL: ", bst.levelOrder());
console.log("PREORDER: ", bst.preorder());
console.log("POSTORDER: ", bst.postorder());
console.log("INORDER: ", bst.inorder());

// unbalance the tree
for (let i = 0; i < 10; i++) {
  bst.insert(Math.floor(Math.random() * 100 + 100));
}
console.log("UNBALANCE BST: ");
bst.prettyPrint();

// confirm tree is unbalanced
console.log(
  !bst.isBalanced() ? "PASS: Tree is unbalanced" : "FAIL: Tree is balanced"
);

// rebalance the tree
bst.rebalance();
console.log("REBALANCE: ");
bst.prettyPrint();

// confirm tree is balanced
console.log(
  bst.isBalanced() ? "PASS: Tree is balanced" : "FAIL: Tree is not balanced"
);

// print all elements in level, pre, post, and in order
console.log("LEVEL: ", bst.levelOrder());
console.log("PREORDER: ", bst.preorder());
console.log("POSTORDER: ", bst.postorder());
console.log("INORDER: ", bst.inorder());
