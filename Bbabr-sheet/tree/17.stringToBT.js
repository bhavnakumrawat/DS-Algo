function stringToBT(str){
    return solveBT(str,0,str.length-1) 
}

solveBT(str,s,e){
  let rootNode = str[s]
  s++
  let root =  new Node(rootNode)

  let ind  = -1
  if(s<=e && str[s] ==='(')
  {
   ind = findIndex(str,s,e)
  }

  if(ind){
   root.left = solveBT(str,s+1,ind-1)
   root.right = solveBT(str,ind+2,e-1)
  }
  return root
}
findIndex(str,s,e){
  if(s<e) return -1
  let st = []
  for(let i =0;i<e;i++){
    if(str[i === "("){
      st.push(str[i])
    }
    if(str[i === ")"){
        if(st[st.length-1] =="("){
            st.pop();
        }
        if(st.length<1){
            return i
        }
      }
  }
}