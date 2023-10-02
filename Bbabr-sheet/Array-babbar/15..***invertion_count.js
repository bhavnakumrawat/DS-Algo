    // Bruteforce
    inversionCount(arr, N)
    {
        //your code here
        let c = 0;
        
        for(let i = 0;i<N;i++){
              for(let j = i+1;j<N;j++){
                if(arr[i]>arr[j]){
                     c++
                }
              }
        }
        return c
    }

// Using Merge sort

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

// Function to count inversions in the array.
function    inversionCount(arr, N)
{
    //your code here
    return mergeSort(arr,0,N-1)
}
function     mergeAndCount(arr,l,m,r)
{
   let n1 = m-l+1
   let n2  = r-m
    // Left subarray
    let left = [];
    for(let i = 0; i <n1 ; i++)
    {
        left.push(arr[i+l]);
          
    }
      
    // Right subarray
    let right = [];
    for(let i = 0; i < n2; i++)
    {
        right.push(arr[i+m+1]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && j < right.length)
    {
        if (left[i] <= right[j])
        {
            console.log(arr,left,right)
            arr[k++] = left[i++];
        }
        else
        {

            arr[k++] = right[j++];
                            // console.log("Swap : ",arr,m,l,i)

            swaps += (m + 1) - (l + i);
            // console.log("Swap : ",swaps)
        }
                        console.log("Swap123 : ",arr,left,right,m,l,i)

    }
    while (i < left.length)
    {
        arr[k++] = left[i++];
    }
    while (j < right.length)
    {
        arr[k++] = right[j++];
    }
    return swaps;
}
  
// Merge sort function
function mergeSort(arr, l, r)
{
      
    // Keeps track of the inversion count at a
    // particular node of the recursion tree
    let count = 0;
    if (l >= r) return count
        let m = l+parseInt((r-l) / 2);
          
        // Total inversion count = left subarray count
        // + right subarray count + merge count
          
        // Left subarray count
        count += mergeSort(arr, l, m);
           console.log("c1",count)
        // Right subarray count
        count += mergeSort(arr, m + 1, r);
                         console.log("c2",count)

        // Merge count
        count += mergeAndCount(arr, l, m, r);
                   console.log("c3",count)

    return count;
}

console.log(" inversionCount : ",inversionCount([2, 4, 1, 3, 5 ],5))