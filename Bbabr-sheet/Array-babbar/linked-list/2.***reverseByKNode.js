    reverse(node, k)
    {
        //your code here
        if(node == null)
        return null;
        let current = node
        let prev = null
        let next = null
        
            let c = 0
            while(c < k && current !=null){
                next = current.next
                current.next = prev
                prev = current
                current = next
                c++
            }
             
      
        if(next !=null){
            node.next = this.reverse(next, k)
        }
        return prev
    }