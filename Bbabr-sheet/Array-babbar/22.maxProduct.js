class Solution {
    maxProduct(arr,n){
        //code here
        let ans = arr[0]
        let max = ans
        let min = ans

        for(let i = 1;i<n;i++){
            if(arr[i]<0){
                [max,min] = [min,max]
            }
            console.log(arr[i],max,min)
                max = Math.max(arr[i],arr[i]*max)
                min = Math.min(arr[i],arr[i]*min)
            ans = Math.max(ans,max)
        }
        return ans
    }
}
const sol = new Solution()
console.log(sol.maxProduct([6,-3,-10,0,2],5))