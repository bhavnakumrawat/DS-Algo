//{ Driver Code Starts
//Initial Template for javascript


'use strict';


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

class Solution {
    //O(x) = o(n^2) 
    smallestSubWithSum(a,n,x){
     //code here
     let min_l = n+1
     for(let i =0;i<n;i++){
         let cur_sum = a[i]
          if(cur_sum>x)return 1

         for(let j = i+1;j<n;j++){
             cur_sum+=a[j]
             if(cur_sum>x &&(j-i+1<min_l)){
                 min_l = j-i+1
             }
         }
     }
     return min_l
    }
    // O(x) = O(n)
    smallestSubWithSum(a,n,x){
        //code here
        let min_l = n+1
        let cur_sum =a[0]
        for(let i=1;i<n;i++){

            if(a[i]>x)return 1

            for(let j = i+1;j<n;j++){
                cur_sum+=a[j]
                if(cur_sum>x &&(j-i+1<min_l)){
                    min_l = j-i+1
                }
            }
        }
        return min_l
       }
}

class Solution {

    smallestSubWithSum(a,n,x){
     //code here
     let min_l = n+1
     let cur_sum = 0
     
     let s = 0;
     let e = 0;
     
     while(e<n){
         while(cur_sum<=x && e<n){
             cur_sum+=a[e++]
         }
         while(cur_sum>x && s<n){
             if(min_l>e-s)
             min_l = e-s
             cur_sum-=a[s++]
         }
     }
     return min_l
    }

}