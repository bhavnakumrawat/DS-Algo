


const bst = (root,key)=>{
    if(!root) return null
    if(root.data == key){
       return root
    }else if(root.data<key){
      bst(root.right,key)
    }else{
       bst(root.left,key)
    }
   }