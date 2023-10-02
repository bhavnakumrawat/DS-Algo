let s = [1,2,3,4,5,6]
let x = 8
function insertAtMiddle(s,c,n){
    if(c == parseInt(n/2)){
        s.push(x)
        return
    }
    
    let top = s[s.length-1]
    s.pop()
    insertAtMiddle(s,c+1,n)
    s.push(top)
    return s
}

console.log(insertAtMiddle(s,0,6))