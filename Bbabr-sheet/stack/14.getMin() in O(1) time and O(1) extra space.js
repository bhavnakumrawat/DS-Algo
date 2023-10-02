class MinStack {
    constructor() {
        this.stack = [];  // Main stack to store elements
        this.minStack = [];  // Auxiliary stack to store minimum values
    }

    push(val) {
        this.stack.push(val);

        // Update minStack with the new minimum value
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return undefined; // Stack is empty
        }

        const poppedVal = this.stack.pop();

        // Update minStack if the popped value is the current minimum
        if (poppedVal === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return poppedVal;
    }

    top() {
        if (this.stack.length === 0) {
            return undefined; // Stack is empty
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return undefined; // Stack is empty
        }
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const stack = new MinStack();

stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);

console.log("Minimum:", stack.getMin()); // Output: Minimum: 1

stack.pop();
stack.pop();

console.log("Top:", stack.top());       // Output: Top: 5
console.log("Minimum:", stack.getMin()); // Output: Minimum: 3
