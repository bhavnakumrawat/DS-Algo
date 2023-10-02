/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(a) {
    if(a.length<2)return a
    let op = []
 
    a.sort((a,b)=>a[0]-b[0])
    let prev = a[0]
     console.log(a)
 
    for(let i = 1;i<a.length;i++){
        if(prev[1]>=a[i][0]){
            prev = [prev[0],Math.max(prev[1],a[i][1])]
        }else{
            op.push(prev)
            prev = a[i]
        }
    }
    op.push(prev)
    return op
 };