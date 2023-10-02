    isBalancedCheck(root)
    {
        //your code here
        if(!root) return {f:true,s:0}
        
        let l_a = this.isBalancedCheck(root.left)
        let r_a = this.isBalancedCheck(root.right)
        
        let l_c = l_a.f
        let r_c = r_a.f

        let cond = Math.abs(l_a.s-r_a.s) <=1
        let ans = {f:false,s:0}
        
        
        ans.s = Math.max(l_a.s,r_a.s)+1
        if(l_c && r_c && cond){
            ans.f = true
        }else{
            ans.f = false
        }
        // console.log(ans)
       return ans
    }
    isBalanced(root)
    {
        //your code here

       return this.isBalancedCheck(root).f

    }