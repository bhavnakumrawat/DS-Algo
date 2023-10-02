/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate1 = function(a) {
    // Extra space o(n) t(x) = o(n)
      let map = new Map();
      for(let i = 0;i<a.length;i++){
        map.set(a[i],map.get(a[i])?map.get(a[i])+1:1)
        if(map.get(a[i])>1){
          return a[i]
        }
      }
      
   };
   var findDuplicate2 = function(a) {
    // Extra time o(nlogn) , s(x) = o(1)
      // let map = new Map();
      a.sort((a,b)=>a-b)
        for(let i = 0;i<a.length;i++){
          if(a[i] == a[i+1])
          return a[i]                                                                     
        }
    };
    var findDuplicate = function(a) {
    // time o(n) , s(x) = o(1)
      // let map = new Map();
        for(let i = 0;i<a.length;i++){
          let idx = Math.abs(a[i])
  
          if(a[idx]<0)
          return idx
          a[idx] = -a[idx]
        }
       return a.length                                                                    
  
    };

    const nums = [4, 2, 7, 2, 9, 5, 1, 8, 5, 9];


function removeDuplicates(a){
    let l = 0
    let r = 1
    a.sort((a,b)=>a-b)
    while(r<a.length){
        if(a[l]!=a[r]){
            l++
            a[l] = a[r]
        }
        r++
    }
    console.log(l)
    a.length = l+1
    return a
}
const result = removeDuplicates(nums);
console.log(result); // Output: [1, 2, 4, 5, 7, 8, 9]
