calculateDia(root){
          if(root == null){
            return {f:0,s:0}
        }
        
        let l_a = this.calculateDia(root.left)
        let r_a = this.calculateDia(root.right)
        
        let op1 = l_a.f
        let op2 = r_a.f
        let op3 = l_a.s+r_a.s+1
        
        let ans = {f:0,s:0}
        ans.s = Math.max(l_a.s,r_a.s)+1
        ans.f = Math.max(op1,Math.max(op2,op3))
        return ans
    }
    diameter(root) {
        // your code here
      return this.calculateDia(root).f
    }