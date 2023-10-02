findMaxLen(s){
    //code here
  
    let st = []
    
    for(let i = 0;i<s.length;i++){
        if(s[i] == '('){
            st.push(i)
        }else{
                if(st.length>0 && s[st[st.length-1]] =='('){
                    st.pop()
                }else{
                    st.push(i)
                }
            
        }
    }
    let max = 0
    let l = s.length
    while(st.length>0){
        let top = st.pop()
        max = Math.max(max,l-top-1)
        l = top
    }
    return Math.max(max,l)
}