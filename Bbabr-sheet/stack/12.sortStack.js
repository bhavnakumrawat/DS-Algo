let s = [1,12,3,4,15,6]

function sort(s){
    if(s.length == 0){
        return;
    }
    
    let top = s[s.length-1]
    s.pop()
    sort(s)
    sortInsert(s,top)
    return s
}
function sortInsert(s,prevTop){
    if(s.length == 0 || (s.length!=0 && s[s.length-1]<prevTop)){
        s.push(prevTop)
        return;
    }
    let top = s[s.length-1]
    s.pop()
    sortInsert(s,prevTop)
    s.push(top)
}
console.log(sort(s))