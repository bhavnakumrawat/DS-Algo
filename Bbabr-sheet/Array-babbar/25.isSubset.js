    isSubset(a1, a2, n, m){
        //code here
        const map = new Map()
        let flag = 'No'
        for(let i = 0;i<n;i++){
            map.set(a1[i],map.get(a1[i])?map.get(a1[i])+1:1)
        }

        let c = 0
        for(let i = 0;i<m;i++){

            if(map.has(a2[i]) && map.get(a2[i]) !=0){
                c++
                map.set(a2[i],map.get(a2[i])-1)
                // console.log(map)

            }
        }
        if(c == m){
            flag = 'Yes'
        }
        return flag
    }