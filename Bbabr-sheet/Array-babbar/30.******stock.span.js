    calculateSpan(price, n)
    {
        // code here
        let stack = []
        let  op = []
        stack[0] = 0
        op.push(1)
        for(let  i =1;i<n;i++){
            while(stack.length>0&&price[stack[stack.length-1]]<price[i]){
                stack.pop()
            }
            op[i] = stack.length == 0 ? i+1:(i-stack[stack.length-1])
            stack.push(i)
        }
        return op
    }