function populateInorderSuccessor(root){
    let p = null 
  function inorder(node){
    if(!node) return ;
    inorder(node.left)
    if(p){
      p.next = node
    }
    p = node
    inorder(node.right)
  }
  inorder(root)
}