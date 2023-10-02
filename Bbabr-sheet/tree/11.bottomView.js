    bottomView(root)
    {
        //your code here
        if(!root){
            return []
        }
        let map = new Map()
        let q = [{node:root,nd:0}]
        
         while(q.length>0){
             let {node,nd} = q.shift()
             
             map.set(nd,node.data)
             if(node.left){
                 q.push({node:node.left,nd:nd-1})
             }
             if(node.right){
                 q.push({node:node.right,nd:nd+1})
             }
         }
         let arr = Array.from(map.entries())
         let sortData = arr.sort((a,b)=>a[0]-b[0])
         let result = sortData.map(val=>val[1])
         return result
    }