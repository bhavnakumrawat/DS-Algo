const a = [2,1,5,1,3,12]
let k = 3
let n = a.length
let maxSum = 0
let ws = 0
// Bruteforce : O(n^2)
for(let i = 0;i<n-k;i++){
    let curSum = 0
    for(let j = i; j<k+i;j++){
        curSum += a[j]
    }
    maxSum = Math.max(maxSum,curSum)
}
console.log(maxSum)

// Optimization : O(n)
let curSum = 0
let start = 0;
for(let i = 0;i<n;i++){
   curSum = curSum+a[i]
    if(i >=k-1){
        maxSum = Math.max(maxSum,curSum)
        curSum = curSum - a[start]
        start++
    }
}
console.log(maxSum)