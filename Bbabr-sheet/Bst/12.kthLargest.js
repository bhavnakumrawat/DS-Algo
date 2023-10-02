  let current = root;
  let count = 0;
  let result = null;

  while (current !== null) {
    if (current.right === null) {
      // If there is no right child, visit the current node.
      count++;
      if (count === k) {
        result = current.val;
      }
      current = current.left;
    } else {
      // Find the predecessor node (the rightmost node in the left subtree).
      let predecessor = current.right;
      while (predecessor.left !== null && predecessor.left !== current) {
        predecessor = predecessor.left;
      }

      if (predecessor.left === null) {
        // If the predecessor's left pointer is null, set it to the current node.
        predecessor.left = current;
        current = current.right;
      } else {
        // If the predecessor's left pointer is already set, visit the current node.
        predecessor.left = null; // Restore the tree structure.
        count++;
        if (count === k) {
          result = current.val;
        }
        current = current.left;
      }
    }
  }

  return result;
