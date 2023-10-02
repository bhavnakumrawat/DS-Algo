function redundantBracate(s){
    let st = []
   for(let i = 0;i<s.length;i++){
    let ch = s[i]
      if(ch == '(' || ch == '+' ||ch == '-' || ch == '/' || ch == '*'){
        st.push(ch)
      }else{
        if(ch==')'){
            let flag = true
            let top = st[st.length-1]

          while(top !=')'){
            if(top == '+' ||top == '-' || top == '/' || top == '*'){
                flag = false
            }
            st.pop()
          }
          if(flag){
            return true
           }
           st.pop()
   
        }
      }
   }
   return false
}