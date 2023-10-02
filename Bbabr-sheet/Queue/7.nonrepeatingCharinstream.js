function nonRepeatingChar(a, k) {
   let ans = ""
   let n = a.length
   const map = {}
   let q = []
  // 1. insertloop on string
  for(let i = 0;i<n;i++){
      let ch = a[i]
      // 2. Push char in map & increment count
      map[ch] = map[ch]?map[ch]+1:1
      console.log(map)
      q.push(ch)
      //3.lop the queue till the empty 
      while(q.length!=0){
          if(map[q[0]]>1){
              q.pop()
          }else{
              ans+=q[0]
              break;
          }
      }
      if(q.length == 0){
          ans+='#'
      }
  }

    return ans;
  }
  const  a = [1,2,3,4,5]
  let k = 3
  console.log("Op : ",nonRepeatingChar("aabc"))