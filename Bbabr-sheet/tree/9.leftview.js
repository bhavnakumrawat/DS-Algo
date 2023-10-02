// iteration
function leftView(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (i === 0) {
                result.push(node.val); // Add the first node at each level to the result
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}


// recursion
leftView(root)
{
       const result = [];

    function leftViewRecursive(node, depth) {
        if (!node) return;

        // If this is the first node encountered at this depth, add it to the result
        if (depth === result.length) {
            result.push(node.val);
        }

        // Recursively explore the left and right subtrees
        leftViewRecursive(node.left, depth + 1);
        leftViewRecursive(node.right, depth + 1);
    }

    leftViewRecursive(root, 0);
    return result;

}
