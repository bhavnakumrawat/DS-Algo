let c = 0
findBST(r1,r2,x){
    checkSum(r1,r2,x)
    return c
}

checkSum(r1,r2,x){
    if( !r1  ) return null
    checkSum(r1.left,r2,x)
   let sum = x- r1.data
   if(sum>=0){
    find(r2,sum)
   }
    checkSum(r1.left,r2,x)

}
find(root,sum){
   if(root == null) return 
    if(root.data == sum){
        c++
    }else if(root.data>sum){
        find(root.left,sum)
    }else{
        find(root.right,sum)
    }
 return ;
}