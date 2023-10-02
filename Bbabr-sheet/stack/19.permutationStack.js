let a1 = [ 1, 2, 3 ]
let a2 = [ 1,2,3]

let j = 0
let st = [];

for(let i = 0;i<a1.length;i++){
     st.push(a1[i])
      while(st.length>0 && a2[j] == st[st.length-1]){
            st.pop()
            j++
        }  
}
console.log(st.length===0)

