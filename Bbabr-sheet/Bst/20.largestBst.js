constructor(){
          this.ans = 0
      }
  	largestBst(root){
  		//code here
  		if(!root){
  		    return {max:Number.MIN_VALUE,min:Number.MAX_VALUE,size:0,isValid:true}
  		}
  		
  		let left = this.largestBst(root.left)
  		let right = this.largestBst(root.right)
  		
  		let cn = {}
  		cn.max = Math.max(root.key,right.max)
  		cn.min = Math.min(left.min,root.key)
  		cn.size = left.size+right.size+1
     
        if(left.isValid && right.isValid && root.key>left.max && root.key<right.min){
          cn.isValid = true   
        }else{
          cn.isValid = false          
        }
        if(cn.isValid){
            this.ans = Math.max(this.ans,cn.size)
        }
        return this.ans
  	}