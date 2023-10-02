LCA(root, n1, n2)
{
    //your code here
    if(root == null) return null
    if(root.data>n1 && root.data>n2){
        return this.LCA(root.left,n1,n2)
    }
    else  if(root.data<n1 && root.data<n2){
        return this.LCA(root.right,n1,n2)
    }
        return root
    
}