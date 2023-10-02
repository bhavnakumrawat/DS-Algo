diagonal(root){
    if(!root) return null

    let op = []
    let q = []

    let node = root
    while(node!=null){
        op.push(node.data)

        if(node.left){
            q.push()
        }
        if(node.right){
            node = node.right
        }else{
            if(q.length>0){
                node = q.shift();
            }else{
                node = null
            }
        }
    }
    return op
}