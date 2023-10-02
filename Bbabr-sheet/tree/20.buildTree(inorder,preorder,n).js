  	buildTree(inorder,preorder,n){
  		//code here
  	    let map = this.createMap(inorder,n)
  	    console.log("---map",map)
  		return this.buildTree(inorder,preorder,0,inorder.length-1,0,n,map)
  	}
  	createMap(inorder,n){
  	    let map = new Map()
  	    for(let i =0;i<n;i++){
  	        map.set(inorder[i],i)
  	    }
  	    return map
  	}
  	buildTree(inorder,preorder,inI,inE,preI,n,mapData){
  	    if(inI>inE || preI>=n) return 
  	    let preNode = preorder[preI++]
  	    let root = new Node(preNode)
  	    console.log(preNode)
  	    let pos = mapData.get(preNode)
  	    root.left = this.buildTree(inorder,preorder,0,pos-1,preI,n,mapData)
  	    root.right = this.buildTree(inorder,preorder,pos+1,inE,preI,n,mapData)
  	    return root

  	}