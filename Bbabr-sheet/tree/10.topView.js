    topView(root)
    {
        //your code here
    if (!root) return [];

    const queue = [{ node: root, hd: 0 }]; // Queue elements contain the node and its horizontal distance
    const hdMap = new Map(); // Map to store nodes at each horizontal distance

    while (queue.length > 0) {
        const { node, hd } = queue.shift();

        if (!hdMap.has(hd)) {
            // If this horizontal distance is encountered for the first time, add the node to the result
            hdMap.set(hd, node.data);
            // result.push(node.data);
        }

        // Enqueue the left and right children with updated horizontal distances
        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }
    let arr = Array.from(hdMap.entries())
    let sorted = arr.sort((a,b)=>a[0]-b[0])
    let result = sorted.map((val)=>val[1])
    return result;
    }
