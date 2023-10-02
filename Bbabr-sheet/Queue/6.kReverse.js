function kReverse(a, k) {
   let s = []
   let n = a.length
  // 1. insert element in stack from queue  
  let  i = 0
   while(k != i){
       s.push(a[0])
       a.shift()
       i++
   }
   console.log(s)
   // 2. take element from stack & insert in queue   
   while(s.length!=0){
       a.push(s[s.length-1])
       s.pop()
   }
   console.log(s,a)
  // 3. push back n-k element in queue
//   let  i = 0
  let t = n-k
  while(t){
      let front  = a[0]
      a.push(front)
      a.shift()
      t--
  }
    return a;
  }
  const  a = [1,2,3,4,5]
  let k = 3
  console.log("Op : ",kReverse(a,k))
/**
 * The provided code snippet implements a function `kReverse` that performs a k-reverse operation on an array `a`. Let's analyze the time complexity of this code:

1. The first `while` loop iterates `k` times and performs the following steps in each iteration:
   - Pushes the first element of the `a` array onto the `s` stack.
   - Removes the first element from the `a` array using the `shift` method.

   The time complexity of each iteration is O(1) since the `push` and `shift` operations both take constant time. Therefore, the overall time complexity of this loop is O(k).

2. The second `while` loop iterates until the `s` stack is empty and performs the following steps in each iteration:
   - Takes the top element from the `s` stack and pushes it to the end of the `a` array.
   - Removes the top element from the `s` stack using the `pop` method.

   The time complexity of each iteration is O(1) since the `push` and `pop` operations both take constant time. Therefore, the overall time complexity of this loop is O(k).

3. The third `while` loop iterates `n - k` times, where `n` is the length of the `a` array, and performs the following steps in each iteration:
   - Stores the first element of the `a` array in the `front` variable.
   - Pushes the `front` element to the end of the `a` array.
   - Removes the first element from the `a` array using the `shift` method.

   The time complexity of each iteration is O(1) since the `push` and `shift` operations both take constant time. Therefore, the overall time complexity of this loop is O(n - k).

4. Finally, the function returns the modified `a` array.

To calculate the overall time complexity, we add up the time complexities of the individual steps:

O(k) + O(k) + O(n - k) = O(n)

Therefore, the time complexity of the `kReverse` function is O(n) & space O(k).
 */