    rightView(root)
    {
        //your code here
       const result = [];
    
    function rightViewRecursive(node, depth) {
        if (!node) return;

        // If this is the first node encountered at this depth, add it to the result
        if (depth === result.length) {
            result.push(node.data);
        }

        // Recursively explore the right and left subtrees (note the order is reversed for the right view)
        rightViewRecursive(node.right, depth + 1);
        rightViewRecursive(node.left, depth + 1);
    }

    rightViewRecursive(root, 0);
    return result;
    }
//  iteration
    rightView(root)
    {
        //your code here
       const result = [];
    
       let q = [root]
       
       while(q.length>0){
           let s = q.length
           for(let i =0;i<s;i++){
               let f = q.shift()
               if(i == s-1){
                   result.push(f.data)
               }
               if(f.left) {
                   q.push(f.left)
               }
               if(f.right){
                   q.push(f.right)
               }
           }
       }