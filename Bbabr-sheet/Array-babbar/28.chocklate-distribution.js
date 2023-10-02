//{ Driver Code Starts
//Initial Template for javascript


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

class Solution{
    findMinDiff(arr,n,m){
        //code here
        arr.sort((a,b)=>a-b)
        let minDiff = Number.MAX_VALUE
        for(let i = 0;i+m-1<n;i++){
            let curDiff = arr[m+i-1]-arr[i]
            minDiff = Math.min(minDiff,curDiff)
        }
        return minDiff
    }
}
