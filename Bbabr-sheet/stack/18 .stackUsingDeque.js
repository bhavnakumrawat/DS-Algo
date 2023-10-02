class StackUsingDeque {
  constructor() {
    this.deque = [];
  }

  push(value) {
    this.deque.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.deque.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.deque[this.deque.length - 1];
  }

  isEmpty() {
    return this.deque.length === 0;
  }

  size() {
    return this.deque.length;
  }
}

// Example usage
const stack = new StackUsingDeque();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
