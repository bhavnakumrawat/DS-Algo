class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function printKSumPaths(root, k) {
    const result = [];
  
    function dfs(node, currentPath) {
      if (!node) return;
  
      currentPath.push(node.val);
  
      let currentSum = 0;
  
      for (let i = currentPath.length - 1; i >= 0; i--) {
        currentSum += currentPath[i];
        if (currentSum === k) {
          // Create a new array with the path elements
          result.push(currentPath.slice(i));
        }
      }
  
      dfs(node.left, currentPath);
      dfs(node.right, currentPath);
  
      currentPath.pop();
    }
  
    dfs(root, []);
  
    return result;
  }
  
  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(-3);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(2);
  root.right.right = new TreeNode(11);
  root.left.left.left = new TreeNode(3);
  root.left.left.right = new TreeNode(-2);
  root.left.right.right = new TreeNode(1);
  
  const k = 8;
  const kSumPaths = printKSumPaths(root, k);
  console.log(kSumPaths);
  