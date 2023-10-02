    commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        let i = 0;
        let j = 0;
        let k = 0;
        
        let op = new Set()
        
        while(i<n1 && j<n2 && k<n3){
            if(arr1[i] ==arr2[j] && arr2[j] == arr3[k]){
                op.add(arr1[i])
                i++;
                j++;
                k++;
            }else if(arr1[i]<arr2[j]){
                i++
            }else if(arr2[j]<arr3[k]){
                j++
            }else{
                k++
            }
        }
        return op
        
    }

        commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
                //code here
        const map1 = new Map()
        const map2 = new Map()
        let op = new Set()
        
        for(let i = 0;i<n1;i++){
            map1.set(arr1[i],map1.get(arr1[i])?map1.get(arr1[i])+1:1)
        }
        for(let i = 0;i<n2;i++){
            map2.set(arr2[i],map2.get(arr2[i])?map2.get(arr2[i])+1:1)
        }
        
        for(let i = 0;i<n3;i++){
          if(map1.has(arr3[i]) && map2.has(arr3[i])){
              op.add(arr3[i])
          }
        }
        return op
    }