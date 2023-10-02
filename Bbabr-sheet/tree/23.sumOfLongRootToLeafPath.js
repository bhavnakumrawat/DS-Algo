    constructor(){
            this.max_sum = Number.MIN_VALUE
            this.max_len = 0

    }
  sumOfLongRootToLeafPath(root) {
    //code here
    let len = 0 
    let sum = 0
    
  this.check(root,len,sum)
 return this.max_sum;

  }
  check(root,len,sum){
    if(root == null) {
        if(this.max_len<len){

            this.max_len = len
            this.max_sum = sum

        }else if(this.max_len == len){
            this.max_sum = Math.max(this.max_sum,sum)
        }
        return
    }
    this.check(root.left,len+1,sum+root.data)
    this.check(root.right,len+1,sum+root.data)
  }