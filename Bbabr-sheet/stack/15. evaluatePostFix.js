    evaluatePostfix(S)
    {
        //your code here
        let s = []
        let op = ['*','+','/','-'];
        
        let  i = 0
        
        while(i<S.length){
            if(op.includes(S[i])){
                let t2 = parseInt(s.pop())
                let t1 = parseInt(s.pop())
                
                if(S[i] == '*'){
                    s.push(t1*t2)
                }
                else if(S[i] == '+'){
                    s.push(t1+t2)
                }else if(S[i] == '-'){
                    s.push(t1-t2)
                }else  if(S[i] == '/'){
                    s.push(t1/t2)
                }
            }else{
                s.push(S[i])
            }
            i++
        }
        return s[s.length-1] == -0?0:s[s.length-1]
    }