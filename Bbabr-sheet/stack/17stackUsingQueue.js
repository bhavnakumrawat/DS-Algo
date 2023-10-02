class StackUsingQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value) {
    this.queue1.push(value);
  }

  pop() {
    if (this.queue1.length === 0) {
      return null;
    }

    // Move elements from queue1 to queue2, except the last element
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // Pop the last element from queue1 (which is the top element of the stack)
    const poppedValue = this.queue1.shift();

    // Swap queue1 and queue2 references
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedValue;
  }

  peek() {
    if (this.queue1.length === 0) {
      return null;
    }

    // Move elements from queue1 to queue2, except the last element
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // Get the last element from queue1 (which is the top element of the stack)
    const topValue = this.queue1[0];

    // Move the last element back to queue1
    this.queue2.push(this.queue1.shift());

    // Swap queue1 and queue2 references
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return topValue;
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  size() {
    return this.queue1.length;
  }
}

// Example usage
const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
