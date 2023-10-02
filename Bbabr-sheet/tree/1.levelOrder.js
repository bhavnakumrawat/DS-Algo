levelOrder(node)
    {
        //your code here
        let op = []
        let q  = []
        q.push(node)
        
        while(q.length>0){
            let front = q.shift()
            
            op.push(front.data)
            if(front.left != null && front.left !='N'){
                q.push(front.left)
            }
            if(front.right != null && front.right !='N'){
                q.push(front.right)
            }
        }
        return op
    }