/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let n = nums.length
 
    let idx1 = -1
    let idx2 = -1
   
   for(let i = n-1;i>0;i--){
     if(nums[i]>nums[i-1]){
      idx1 = i-1
      idx2 = i
      break;
     }
   }
   if(idx1!=-1){
      let t = nums[idx1]
      nums[idx1] = nums[idx2]
      nums[idx2] = t
   }
   let s = idx1+1, e = n-1
   while(s<e){
     let t = nums[s]
     nums[s] = nums[e]
     nums[e] = t
     s++;
     e--;
   }
   return nums
 };