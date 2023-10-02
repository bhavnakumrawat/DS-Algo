let a = [3, 1, 2, 2, 1, 2, 3, 3]
let k = 4
let n = 8

const map = new Map()
for(let i = 0;i<n;i++){
    map.set(a[i],map.get(a[i])?map.get(a[i])+1:1)
}

let dupCount = Math.floor(n/k)
const op = [];
for(let [key,val] of map){
    console.log(dupCount,key,val)

    if(dupCount == val)
    {
        op.push(key)
    }
}
 console.log(op)