let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = []
// bruteforce o(n^2)
for(let i = 0;i<n;i++){
         let c = 0
                 console.log(n,i)

    for(let j = i+1;j<n+1;j++){
        if(a[i]<a[j] && c == 0){
           ans.push(a[j])  
           c++
        }
        if(n-1==i){
            ans.push(-1)
        }
    }
}
console.log("Welcome to Programiz!",ans);

// O(n)
let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = []
let s = []
// s.push(-1)
for(let i = n-1;i>=0;i--){
      let curr = a[i]
    while(s[s.length-1]<=curr){
        s.pop()
    }
    if(s.length> 0)
    {
     ans[i] = s[s.length-1]
   }
    s.push(curr)
        console.log(i,ans)
}
ans.push(-1)
console.log("Welcome to Programiz!",ans);

// 
let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = new Array(n).fill(1)
let s = []

// s.push(-1)
for(let i = 1;i<n-1;i++){
      let curr = a[i]
    while(s.length>0&& a[s[s.length-1]]<=curr){
        s.pop()
    }
    ans[i] = s.length == 0 ?i+1:i-s[s.length-1]
    s.push(i)
}
console.log("Welcome to Programiz!",ans);


// NSI
let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = new Array(n)
let s = []
s.push(-1)
for(let i = n-1;i>=0;i--){
      let curr = a[i]
    while(s[s.length-1]>=curr){
        s.pop()
    }
    ans[i] = s[s.length-1]
    s.push(curr)
}
console.log("Welcome to Programiz!",ans);