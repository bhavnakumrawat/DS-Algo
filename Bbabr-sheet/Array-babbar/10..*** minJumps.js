function minJumps(arr,n){
          //code here
        let total_jump = 0
        let e = 0
        let s = 0
        
       for(let i = 0; i< n-1 ; i++){
           e = Math.max(e,arr[i]+i)
           if(s == i){
               s =  e
               total_jump++;
           }

       }
        if(s<n-1)return -1
           return total_jump
    }
console.log(" OP : ",minJumps([2, 3, 1, 1, 2 ,4, 2 ,0, 1 ,1],10));