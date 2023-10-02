let a  = [100, 80, 60, 70, 60, 75, 85];
let n = a.length

const spans  = new Array(n).fill(1)
let s = []

// s.push(-1)
for(let i = 0;i<n;i++){
    let curr = a[i]
    while(s.length && a[s[s.length-1]]<curr){
        let topIndex = s.pop()
        spans[i] += spans[topIndex]
    }
    s.push(i)
}
console.log("Welcome to Programiz!",spans);
