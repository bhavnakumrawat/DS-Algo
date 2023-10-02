const subArrayExists = (arr) => {
    const sumSet = new Set();
 
    // Traverse through array
    // and store prefix sums
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];
         console.log(sumSet,sum)

        // If prefix sum is 0
        // or it is already present
        if (sum === 0 || sumSet.has(sum))
            return true;
 
        sumSet.add(sum);
    }
    return false;
}
 
// Driver code
 
const arr =  [4, 2, -3, 1, 6];
console.log(subArrayExists(arr))


//if t =30 

let l = 0
let sum  = 0
let t = 33
let a = [1,4,20,3,10,5]
let f = false

for(let r = 0;r<a.length-1;r++){
      sum +=a[r]
      while(sum>t){
          sum = sum - a[l]
          console.log(sum)
          l++
      }
      if(sum == t){
          f = true
      }
}
console.log("Welcome to Programiz!",f);