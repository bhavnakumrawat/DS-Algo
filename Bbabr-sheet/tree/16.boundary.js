  boundary(root) {
    //your goes code here
    if(root === null) return null
    let op = []
    
    op.push(root.data)
    
    // leftTraverse
    this.leftTraverse(root.left,op)
    this.leafTraverse(root.left,op)
    this.leafTraverse(root.right,op)
    this.rightTraverse(root.right,op)
     return op
  }
  leftTraverse(root,op){
      if(root == null) return null
      if(root.left == null && root.right == null)return null

      op.push(root.data)
      if(root.left)
      {
          this.leftTraverse(root.left,op)
      }
      else
      {
         this.leftTraverse(root.right,op)   
      }
      return op
  }
   rightTraverse(root,op){
      if(root == null) return null
      if(root.left == null && root.right == null)return null

      if(root.right)
      {
          this.rightTraverse(root.right,op)
      }
      else
      {
         this.rightTraverse(root.left,op)   
      }
         op.push(root.data)

      return op
  }
     leafTraverse(root,op){
      if(root == null) return null
      if(root.left == null && root.right == null){
                op.push(root.data)
      }
      this.leafTraverse(root.left,op)   
      this.leafTraverse(root.right,op)
      return op
  }