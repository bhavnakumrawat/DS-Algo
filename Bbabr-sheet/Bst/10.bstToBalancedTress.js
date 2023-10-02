  	bstToBalanced(root){
  		//code here
  		let result = []
  		this.inorder(root,result)
  		
  		let s = 0, e = result.length-1
  		this.createBST(result,s,e)
  		
  	}
  	createBST(inData,s,e){
  	        if(s>e){
  		        return;
  		    }
  		    let mid = parseInt((s+e)/2)
  		    let root = new Node(inData[mid])
  		    root.left = this.createBST(inData,s,mid-1)
  		    root.right = this.createBST(inData,mid+1,e)
  		    return root
  	}
  	inorder(root, result) {
  if (root === null) return;
  this.inorder(root.left, result);
  result.push(root.value);
  this.inorder(root.right, result);
}