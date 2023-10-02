function heap(){
 let a = [1,22,3,4,5]
let n = a.length
 for(let i = n/2;i>0;i--){
   heapify(arr,i,n)
 }
}
function maxheapify(arr,i,n){
    let lar = i
    let li = 2*i;
    let ri = 2*i+1

    if(li<n && arr[i]<arr[li]){
        lar = li
    }
    if(ri<n && arr[i]<arr[ri]){
        lar = ri
    }

    if(lar != i){
        [arr[lar],arr[i]] = [arr[i],arr[lar]]
        this.heapify(arr,lar,n)
    }
}
function minheapify(arr,i,n){
    let lar = i
    let li = 2*i;
    let ri = 2*i+1

    if(li<n && arr[i]>arr[li]){
        lar = i
    }
    if(ri<n && arr[i]>arr[ri]){
        lar = i
    }

    if(lar != i){
        [arr[lar],arr[i]] = [arr[i],arr[lar]]
        this.heapify(arr,lar,n)
    }
}