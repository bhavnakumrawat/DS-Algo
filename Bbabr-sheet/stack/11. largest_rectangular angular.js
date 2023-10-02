let h  = [2,1,5,6,2,3]

let n = h.length

let next = getNextSmallerElement(h)
let prev = getPrevSmallerElement(h)

console.log(next,prev)
let area = Number.MIN_VALUE

for(let i = 0;i<n;i++){
    let l = h[i];
    
    if(next[i] == -1){
        next[i] = n
    }
    let b = next[i]-prev[i]-1
    area = Math.max(l*b,area)
}
console.log("Welcome to Proramiz!",area)
;

function getNextSmallerElement(a){
    let s = [];
    let ans = []
    let n = a.length
    s.push(-1)
    
    for(let i = n-1;i>=0;i-- ){
        while(h[s[s.length-1] ]>=a[i] && s[s.length-1] != -1){
            s.pop()
        }
        ans[i] = s[s.length-1]
        s.push(i)
    }
    return ans
}
function getPrevSmallerElement(a){
    let s = [];
    let ans = []
    let n = a.length
    s.push(-1)
    
    for(let i = 0;i<n;i++){
        while(a[s[s.length-1]] >=a[i] && s[s.length-1]!=-1){
            s.pop()
        }
        ans[i] = s[s.length-1]
        s.push(i)
    }
    return ans
}
