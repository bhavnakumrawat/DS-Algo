class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(node, result) {
  if (node === null) return;

  inorderTraversal(node.left, result);
  result.push(node.val);
  inorderTraversal(node.right, result);
}

function findMedian(root) {
  const sortedValues = [];
  inorderTraversal(root, sortedValues);

  const n = sortedValues.length;
  
  if (n % 2 === 1) {
    // If the number of values is odd, return the middle element.
    return sortedValues[Math.floor(n / 2)];
  } else {
    // If the number of values is even, return the average of the two middle elements.
    const middle1 = sortedValues[n / 2 - 1];
    const middle2 = sortedValues[n / 2];
    return (middle1 + middle2) / 2;
  }
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const median = findMedian(root);
console.log("Median of the BST:", median);
