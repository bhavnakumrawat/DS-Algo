    isPalindrome(S){
        //code here
        S= S.split('')
        let s = 0;
        let e = S.length-1
        
        while(s<e){
            if(S[s] != S[e]){
               return 0 
            }
            s++
            e--
        }
        return 1
    }