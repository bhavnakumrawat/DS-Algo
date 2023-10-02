function findFirstNegativeInWindow(arr, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < k; i++) {
    if (a[i] < 0) {
      queue.push(i);
    }
  }
  if (queue.length > 0) {
    result.push(arr[queue[0]]);
  } else {
    result.push(0);
  }
  console.log(result, queue);
  for (let i = k; i < arr.length; i++) {
    console.log(i, queue[0], k);
    if (i - queue[0] >= k && queue.length > 0) {
      queue.shift();
    }
    if (arr[i] < 0) {
      queue.push(i);
    }
    if (queue.length > 0) {
      result.push(arr[queue[0]]);
    } else {
      result.push(0);
    }
  }
  return result;
}
const a = [-8, 2, 3, -6, 10];
let k = 2;

console.log("Op : ", findFirstNegativeInWindow(a, k));
/**Apologies for the confusion in my previous response. Let's reassess the time complexity of the code.

The time complexity of the provided code snippet is O(n * k), not just O(n). Here's the breakdown:

1. The first `for` loop iterates over the first `k` elements of the array. Since `k` is a constant in this context, the time complexity of this loop is O(1).

2. The second `for` loop iterates over the remaining `n - k` elements of the array, starting from index `k`. Therefore, the time complexity of this loop is O(n - k).

3. Within each iteration of the second `for` loop, the `shift` operation may be called on the `queue` array. The worst-case time complexity of the `shift` operation is O(k) because it involves shifting elements in the array.

Considering the worst case, if the `shift` operation is called in every iteration of the second `for` loop, the total number of shifts performed would be (n - k). Therefore, the overall time complexity of the `shift` operations becomes O((n - k) * k) or O(n * k).

Since we always consider the worst case when analyzing time complexity, we can conclude that the time complexity of the provided code snippet is O(n * k).

 * 
 * 
 */