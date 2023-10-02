    lca(root, n1, n2)
    {
        //your code here
        if(root == null) return null
        
         if(root.data == n1 || root.data == n2){
             return root
         }
         
         let l = lca(root.left,n1,n2)
         let r = lca(root.right,n1,n2)
         
         if(l!=null && r !== null){
             return root
         }
        if(l!=null && r == null){
             return l
         }
         if(l==null && r !== null){
             return r
         }

    }