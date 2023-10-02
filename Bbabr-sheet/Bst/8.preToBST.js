function preToBST(root){
 let max = Number.MAX_VALUE
 let min = Number.MIN_VALUE
let i = 0
let pre = preOrder(root)
return convertBST(pre,max,min,i)
}
convertBST(pre,max,min,i){
    if(i>pre.length) return null

    if(pre[i]<min || pre[i>max]) return null

    let root = new Node(pre[i++])
    root.left = this.convertBST(root.left,min,root.data,i)
    root.right = this.convertBST(root.left,root.data,max,i)
    return root
}