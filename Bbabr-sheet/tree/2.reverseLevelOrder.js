  	reverseLevelOrder(root){
  		//code here
       let q = []
       let op = []
       let st1 = []
       q.push(root)
       while(q.length>0){
           let t = q.shift()
           st1.push(t.data)
           if(t && t.right&&t.right!='N'){
               q.push(t.right)
           }
           if(t && t.left && t.left!='N'){
               q.push(t.left)
           }
       }
       while(st1.length>0){
           let t = st1.pop()
           op.push(t)
       }
       return op
  	}