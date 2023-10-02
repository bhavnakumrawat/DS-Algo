  	kthLargest(root,k){
  		//code here
  		let c = 0
  		let cn = root
  		let n = this.countNode(root)
  		while(cn){
  		    if(cn && cn.left == null){
  		        c++
  		        if(c ==k){
  		            return cn.data
  		        }
  		        cn = cn.right
  		    }else{
  		        let pred = cn.left
  		        
  		        while(pred && pred.right && pred.right !=cn){
  		            pred = pred.right
  		        }
  		        console.log(pred.data)
  		        if(!pred){
  		            pred.right = cn.right
  		            cn = cn.left
  		        }else{
  		            pred.right = null
  		            c++
  		        console.log(c,k,root)

  		            if(c ===k){
  		                return cn.data
  		            }
  		            cn = cn.right
  		        }
  		    }
  		}
  	}