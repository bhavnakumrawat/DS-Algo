let a  = [-2,-1,-3,-4,-1,-2,-1,-5,-4]

let max_sum = 0
let cur_sum = 0
for(let i = 0;i<a.length-1;i++){
    cur_sum = a[i]+cur_sum
    max_sum = Math.max(cur_sum,max_sum)
    if(cur_sum<0){
        cur_sum = 0
    }
}
console.log(" max_sum ",max_sum)