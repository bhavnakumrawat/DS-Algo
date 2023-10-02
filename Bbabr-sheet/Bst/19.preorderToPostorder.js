function preorderToPostorder(preorder) {
  if (preorder.length === 0) {
    return [];
  }

  const root = preorder[0];
  const leftPreorder = [];
  const rightPreorder = [];
  
  // Divide the preorder array into left and right subtrees.
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] < root) {
      leftPreorder.push(preorder[i]);
    } else {
      rightPreorder.push(preorder[i]);
    }
  }
  
  // Recursively process the left and right subtrees.
  const leftPostorder = preorderToPostorder(leftPreorder);
  const rightPostorder = preorderToPostorder(rightPreorder);
  
  // Combine the left and right postorder results with the root to get the final postorder.
  return leftPostorder.concat(rightPostorder, root);
}

// Example usage:
const preorder = [8, 5, 1, 7, 10, 12];
const postorder = preorderToPostorder(preorder);
console.log("Postorder traversal:", postorder); // Output: [1, 7, 5, 12, 10, 8]
