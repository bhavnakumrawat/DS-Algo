function maxheapify(arr,i,n){
    let lar = i
    let li = 2*i;
    let ri = 2*i+1

    if(li<n && arr[i]<arr[li]){
        lar = i
    }
    if(ri<n && arr[i]<arr[ri]){
        lar = i
    }

    if(lar != i){
        [arr[lar],arr[i]] = [arr[i],arr[lar]]
        this.heapify(arr,lar,n)
    }
}

function heapSort(arr){
    let n=arr.length-1

    while(n>1){
        [arr[0],arr[n]] = [arr[n],arr[0]]
        n--
        maxheapify(arr,1,n)
    }
}