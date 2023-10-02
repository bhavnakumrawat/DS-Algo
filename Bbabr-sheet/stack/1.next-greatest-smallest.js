// next Smallesrt
let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = new Array(n).fill(-1)
let s = []

// s.push(-1)
for(let i = 0;i<n;i++){
      let curr = a[i]
    while(s.length && a[s[s.length-1]]>curr){
        let t = s.pop()
        ans[t] = curr
    }
    s.push(i)
}
console.log("------NGE",ans);

// Next smallest
let a  = [ 4 , 5 , 2 , 25 ]
let n = a.length

const ans  = new Array(n).fill(-1)
let s = []

// s.push(-1)
for(let i = 0;i<n;i++){
      let curr = a[i]
    while(s.length && a[s[s.length-1]]<curr){
        let t = s.pop()
        ans[t] = curr
    }
    s.push(i)
}
console.log("--------next smallest element",ans);
