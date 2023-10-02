const a = [1, 15, 10]
let  k = 6
a.sort((a,b)=>a-b)
let n = a.length
let smallest = a[0]+k
let largest = a[n-1]-k
let ans = a[n-1]-a[0]
let min=Number.MAX_VALUE,
max=Number.MIN_VALUE
// console.log(smallest,largest,ans)
for(let i =0;i<n-1;i++){
    min = Math.min(smallest,a[i+1]-k)
    max = Math.max(largest,a[i]+k)
    console.log(min,max,ans)
    if(min<0) continue;
    ans = Math.min(ans,max-min)
}
console.log("min height of tower is : ",ans);