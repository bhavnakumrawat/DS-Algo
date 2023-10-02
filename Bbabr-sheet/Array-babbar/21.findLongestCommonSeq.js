    findLongestConseqSubseq(arr, N){
        // code here
        //  TS : nlogn , SC : O(1)
        // arr.sort((a,b)=>a-b)
        
        // let cur_length = 1
        // let max_length = 0
        
        // for(let i = 0;i<N;i++){
        //     if(arr[i]==arr[i+1]) continue
        //     if(arr[i]+1==arr[i+1]){
        //         cur_length++
        //         // console.log(arr)
        //     }else{
        //         max_length = Math.max(max_length,cur_length)
        //         cur_length = 1
        //     }
        // }
        
        // Ts : O(N) , S(x) = O(N)
        let ans = 0
        let setMap = new Set()
        for(let i = 0;i<N;i++){
            setMap.add(arr[i])
        }
        for(let i = 0;i<N;i++){
            if(!setMap.has(arr[i]-1)){
                
                let j = arr[i]
                while(setMap.has(j))
                j++
                ans = Math.max(ans,j-arr[i])
            }
        }
        return ans;
    }