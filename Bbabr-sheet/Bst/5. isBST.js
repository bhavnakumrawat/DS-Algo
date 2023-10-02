    isBST(root)
    {
        //your code here
       return this.isBSTree(root,Number.MIN_VALUE,Number.MAX_VALUE)
    }
    isBSTree(root,min,max){
        if(!root) return 1
        if(root.data>min && root.data<max){
            let l = this.isBSTree(root.left,min,root.data)
            let r = this.isBSTree(root.right,root.data,max)
            return l && r ? 1:0
        }
        else{
            return 0
        }
    }