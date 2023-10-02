let arr = [0, -1, 2, -3, 1];
let n = arr.length 
let t  = 0
const op = new Set()
for(let i = 0 ;i<n-1;i++){
    let l  = i+1;
    let r = n-1
    while(l<r){
     let c = arr[i]+arr[l]+arr[r]
        if(c == t){
                console.log(arr[i],arr[l],arr[r],c)

            op.add([arr[i],arr[l],arr[r]])
            l++;
            r--
        }else if(c>t){
            r--
        }else {
            l++;
        }
    }
}


// sum 
let arr = [0, -1, 2, -3, 1];
let n = arr.length;
let t = 0;
const op = new Set();

for (let i = 0; i < n - 1; i++) {
  const seen = new Map();

  for (let j = i + 1; j < n; j++) {
    const complement = t - (arr[i] + arr[j]);

    if (seen.has(complement)) {
      op.add([arr[i], complement, arr[j]]);
    }

    seen.set(arr[j], j);
  }
}

console.log(op);

console.log(op)
