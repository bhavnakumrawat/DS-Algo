//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let X = input_ar0[1];
        let A = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            A[i] = input_ar1[i];
        let obj = new Solution();
        if(obj.find3Numbers(A, n, X)){
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @param {number} X
 * @returns {boolean}
*/

class Solution {
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    find3Numbers(a, n, X)
    {
        a.sort((a,b)=>a-b)
        //your code here
        for(let i = 0;i<n;i++){
               let l = i
               let m =  i+1 
               let r = n-1
               while(l<r && m<r){
                   let sum = a[l]+a[m]+a[r]
                   if(sum == X){
                    //   console.log(l,m,r,[a[l],a[m],a[r]],sum)
                       return [a[l],a[m],a[r]]
                   }else if(sum<X){
                       m++
                   }else{
                       r--
                   }
               }
        }
        return 0

    }
}