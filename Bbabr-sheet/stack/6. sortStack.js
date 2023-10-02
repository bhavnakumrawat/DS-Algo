// time complexity is still quadratic (O(n^2)), and the space complexity is linear (O(n)). 
function sortStack(stack) {
  if (stack.length !== 0) {
    const top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
  }
}
function insertInSortedOrder(stack, element) {
  if (stack.length === 0 || element > stack[stack.length-1]) {
    stack.push(element);
  } else {
    const top = stack.pop();
    insertInSortedOrder(stack, element);
    stack.push(top);
  }
}
const stack = []
stack.push(4);
stack.push(2);
stack.push(1);
stack.push(3);

console.log("Original stack:", stack); // [4, 2, 1, 3]

sortStack(stack);

console.log("Sorted stack:", stack); // [1, 2, 3, 4]


// Using Loop
// Overall, the time complexity is quadratic (O(n^2)), and the space complexity is linear (O(n)).
function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();
    console.log(tempStack[tempStack.length - 1],temp)
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
      stack.push(tempStack.pop());
    }
  
    tempStack.push(temp);
    console.log("temp stack",tempStack)
  }

  // Copy elements from temporary stack back to the original stack
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }
}
const stack = [4, 2, 1, 3];

console.log("Original stack:", stack); // [4, 2, 1, 3]

sortStack(stack);

console.log("Sorted stack:", stack); // [1, 2, 3, 4]
