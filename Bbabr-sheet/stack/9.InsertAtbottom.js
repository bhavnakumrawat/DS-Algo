let s = [1,2,3,4,5,6]
let x = 8
function insertAtBottom(s){
    if(s.length == 0){
        s.push(x)
        return
    }
    
    let top = s[s.length-1]
    s.pop()
    insertAtBottom(s)
    s.push(top)
    return s
}

console.log(insertAtBottom(s))