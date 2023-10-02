 function getPairsCount(arr,n,k){
       //code here
       let c = 0
       for(let i = 0;i<n;i++){
           for(let j = i+1;j<n;j++){
               if(arr[i]+arr[j] == k){
                   c++
               }
           }
       }
       return c
}
// Using has map
function getPairsCount(arr,n,k){
    //code here
    let c = 0
 //   let i =0;
 //   let j = n-1
 //   arr.sort((a,b)=>a-b)
 //   while(i<=j){
 //           if(arr[i]+arr[j] == k && i!=j){
 //               c++
 //               i++
 //               j--
 //           }else if(arr[i]+arr[j]<k){
 //               i++
 //           }else{
 //               j--
 //           }
 //   }
 let map = new Map()
 for(let i =0;i<n;i++){
     map.set(arr[i],map.get(arr[i])?map.get(arr[i])+1:1)
 }
 for(let i =0;i<n;i++){
     
     let diff = k - arr[i]
     
     if(map.get(diff)!=null){
         c+=map.get(diff)
     }
     if(diff == arr[i]){
         c--
     }
 }
    return c/2
 }