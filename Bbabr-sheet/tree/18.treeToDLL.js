function treeToDLL(root) {
  if (!root) return null;

  let head = null; // This will be the head of our doubly linked list.
  let prev = null; // Keep track of the previously visited DLL node.

  function inOrderTraversal(node) {
    if (!node) return;

    // Recursively traverse the left subtree.
    inOrderTraversal(node.left);

    // Convert the current binary tree node to a DLL node.
    const dllNode = new DLLNode(node.value);

    // If the previous node exists, link it to the current DLL node.
    if (prev) {
      prev.next = dllNode;
      dllNode.prev = prev;
    } else {
      // If there is no previous node, set the head of the DLL.
      head = dllNode;
    }

    prev = dllNode; // Update the previous DLL node.

    // Recursively traverse the right subtree.
    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return head;
}
