var deleteNode = function(root, key) {
   if(!root) return null
           console.log(root.val)

   if(root.val == key){
       // o child
        if(!root.left && !root.right){
            console.log(root)
            delete root
            return null
        }
       // 1 child
        if(root.left && !root.right){
            let t = root.left
            delete root
            return t
        }
       if(!root.left && root.right){
            let t = root.right
            delete root
            return t
        }
       // 2 child
       if(root.left && root.right){
            let mini  = minVal(root.right)
            root.val = mini
            root.right = deleteNode(root.right,mini)
            return root
       }
   }
  else if(root.val<key){
    root.right = deleteNode(root.right,key)
    return root
  }else{
     root.left = deleteNode(root.left,key)
     return root
  }
};
const minVal  = (root)=>{
   let temp = root
   while(temp && temp.left){
       temp = temp.left
   }
   return temp.val
}