let str = 'abcde'


let s = []

for(let i = 0;i<str.length;i++){
    s.push(str[i])
}
let ans= ''
while(s.length != 0){
    ans+=s.pop()
}
console.log(ans)