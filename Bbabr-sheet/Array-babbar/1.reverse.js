// 1. Reverse the array
let a = [1,22,33,2,4,5,44]
let op = []
// t(x) = o(n), s(x)=o(n)
for(let i = a.length-1;0<=i;i--){
    op.push(a[i])
}
console.log(op)

// t(x) = o(n), s(x)=o(1)
let s = 0;
let e = a.length-1
while(s<e){
    if(s==e) break
   [a[s],a[e]] = [a[e],a[s]]
   s++
   e--
}
console.log("-- A : ",a)

const a = [1,2,3,4,9,0,7,9]
let n = a.length-1

for(let i = 0;i<n/2;i++){
   [a[i],a[n-i]] = [a[n-i],a[i]]
}

console.log(a)

// 2. Find Min & Max
let a = [3, 5, 4, 1, 9]

let min = Number.MAX_VALUE
let max = Number.MIN_VALUE

for(let i = 0;i<a.length;i++){
    if(min>a[i]){
        min = a[i]
    }
    if(max<a[i]){
        max = a[i]
    }
}
console.log("max : ",max,"  min : ",min)