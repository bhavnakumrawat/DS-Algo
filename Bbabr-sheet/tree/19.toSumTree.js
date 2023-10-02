  	toSumTree(root){
  		//code here
  		if(!root)  return 0

  		let l_s =  this.toSumTree(root.left)
  		let r_s = this.toSumTree(root.right)

        let old_val = root.data
  		root.data = l_s+r_s
  		return root.data +old_val
  	}