/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(a, i, j){

      let li = i;

      let ri = j;

      while(li<ri){

          let temp = a[li];

          a[li++] = a[ri];

          a[ri--] = temp;
      }

  }
var rotate = function(nums, k) {
 
   // to decrease computation for same result
    k = k % nums.length;

    // if k is negative 
    // if(k < 0)

    // k = k + nums.length;
    
    // this is for right rotate
    //part 1
    //reverse left part
    reverse(nums, 0, nums.length-k-1);

    //part 2
    //reverse right part
     reverse(nums, nums.length-k, nums.length-1);

    //all
    
    reverse(nums, 0, nums.length-1);

    // this is for left rotate
    //part 1
    //reverse left part
    reverse(nums, 0, k-1);

    //part 2
    //reverse right part
     reverse(nums, k, nums.length-1);

    //all
    
    reverse(nums, 0, nums.length-1);


    return nums;
};

    //O(n^2) Solution
   
    // for(let i = 0; i<k; i++){

    //     let temp = nums[nums.length - 1];//7

    //     for(let j = nums.length - 1; j>0; j--){

    //         nums[j] = nums[j-1];
    //     }
    //     nums[0]=temp;
    // }

    // return nums;