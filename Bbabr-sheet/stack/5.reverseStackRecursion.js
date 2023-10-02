function reverseStack(stack) {
    if (stack.length !== 0) {
      const item = stack.pop();
      reverseStack(stack);
      insertAtBottom(stack, item);
    }
    else{
        return
    }
  }
  function insertAtBottom(stack, item) {
      console.log(stack)
    if(stack.length === 0) {
      stack.push(item);
    } else {
      const temp = stack.pop();
      insertAtBottom(stack, item);
      stack.push(temp);
    }
  }
  const stack = [];
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log("Original stack:", stack); // [1, 2, 3, 4]
  
  reverseStack(stack);
  
  console.log("Reversed stack:", stack); // [4, 3, 2, 1]
  