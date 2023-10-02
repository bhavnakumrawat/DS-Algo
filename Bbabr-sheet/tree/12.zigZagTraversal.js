  zigZagTraversal(root)
    {
        //your code here
        if(root == null) return 
        let q = [root]
        let op = []
        let l_t_r = true
        
        while(q.length>0){
            let s = q.length
            let ans = []
            for(let i = 0;i<s;i++){
                let f = q.shift()
                let ind = l_t_r?i:s-i-1
                ans[ind] = f.data
                
                if(f.left){
                    q.push(f.left)
                }
                if(f.right){
                        q.push(f.right)
                }
            }
            l_t_r = !l_t_r
            for(let i of ans){
                op.push(i)
            }
        }
        return op
    }