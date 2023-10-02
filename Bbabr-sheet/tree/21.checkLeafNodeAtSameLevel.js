function checkLeafNodeAtSameLevel(root){
     let ma = -1
     let ans = 0
     let h = 0

     return check(root,h,ma)
}
function check(root,h,ma){
    if(!root) return
    if(!root.left && !root.right){
        if(ma == -1){
            h = ma
        }else if(ma !=h){
            ans = 0
        }
        return
    }
    check(root.left,h+1,ma)
    check(root.right,h+1,ma)
  return ans
}