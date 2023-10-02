//find the time & space complexity                                                                                                          
       merge(arr1, arr2, n, m)
    {
        //your code here
        let i =0 ,j=0, k =n-1
        while(i<=k && j<m){
            if(arr1[i]<arr2[j]){
                i++
            }else{
                let t = arr2[j]
                arr2[j] = arr1[k]
                arr1[k] = t
                k--
                j++
            }
        }
        arr1.sort()
        arr2.sort()
        return arr1.concat(arr2)
    }
             