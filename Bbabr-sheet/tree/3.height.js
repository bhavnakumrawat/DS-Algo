 height(node)
    {
        //your code here
        if(node == null)
        return 0
        
        let left_height = this.height(node.left)
        let right_height = this.height(node.right)
        
        return Math.max(left_height,right_height)+1

    }