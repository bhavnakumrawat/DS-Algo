    celebrity(M, n)
    {
        // code here
        let stack = []
        // code here
       for(let i = 0;i<n;i++){
           stack.push(i)
       }
       
       let c = 0
       while(c<n-1){
           let a = stack.pop()
           let b = stack.pop()
           
           if(M[a][b]){
               stack.push(b)
           }else{
               stack.push(a)
           }
           c++
       }
       let pc =  stack[stack.length-1]
       
        // Check Row   
        let zeroCount = 0
        for(let i = 0;i<n;i++){
                if(M[pc][i] === 0){
                    zeroCount++
                }
        }
        let row_check = false
        if(zeroCount == n){
            row_check = true
        }

        let col_check = false
        let oneCount= 0
       for(let i = 0;i<n;i++){
            if(M[i][pc] === 1){
                oneCount++
            }
        }

        if(oneCount == n-1){
            col_check = true
        }
         if(row_check && col_check){
            return pc
         }else{
            return -1
         }

    }