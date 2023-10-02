  	findDist(root,a,b){
  		//code here

  		let lca = this.lca(root,a,b)
  		let l = this.findDis(lca,a)
  		let r = this.findDis(lca,b)
  		return l+r-2

  	}
  	findDis(root,val){
  	    
  	    if(!root) return 0
  	    if(root.data == val) return 1
  	    
  	    let l = this.findDis(root.left,val)
  	    let r = this.findDis(root.right,val)
  	    
  	    if(!l && !r) return 0
  	    else return l+r+1
  	}
  	lca(root,n1,n2){
  	    if(!root) return
  	    if(root.data == n1 || root.data == n2)
  	    {
  	        return root
  	    }
  	    
  	    let l = this.lca(root.left,n1,n2)
  	    let r = this.lca(root.right,n1,n2)
       
        if(l && r) return root
        if(!l && r) return r
        if(!r && l) return l
  	}