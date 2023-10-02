    maxIndexDiff(A, N)
    {
        //your code here
        let i = 0
        let  j = 0;
        
        let maxDiff = Number.MIN_SAFE_INTEGER
        
        let Lmin = []
        Lmin[0] = A[0]
        for(let i = 1;i<N;i++){
            Lmin[i] = Math.min(A[i],Lmin[i-1])
        }
        let Rmax = []
        Rmax[N-1] = A[N-1]
        for(let i = N-2;i>=0;i--){
            Rmax[i] = Math.max(A[i],Rmax[i+1])
        }
        while(i<N && j<N){
            if(Lmin[i]<=Rmax[j]){
                maxDiff = Math.max(maxDiff,j-i)
                j++
            }else{
                i++
            }
        }
       
        return maxDiff;
    }