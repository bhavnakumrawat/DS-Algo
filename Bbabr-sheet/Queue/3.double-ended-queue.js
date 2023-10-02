// Deque class
class Deque {
  constructor() {
    this.items = [];
  }

  // addFront method to add an element to the front of the deque
  addFront(element) {
    this.items.unshift(element);
  }

  // addRear method to add an element to the rear of the deque
  addRear(element) {
    this.items.push(element);
  }

  // removeFront method to remove an element from the front of the deque
  removeFront() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // removeRear method to remove an element from the rear of the deque
  removeRear() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // front method to get the front element of the deque
  front() {
    if (this.isEmpty()) {
      return "No elements in the deque";
    }
    return this.items[0];
  }

  // rear method to get the rear element of the deque
  rear() {
    if (this.isEmpty()) {
      return "No elements in the deque";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty method to check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size method to get the size of the deque
  size() {
    return this.items.length;
  }

  // print method to display the elements of the deque
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

// Example usage
const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(30);
deque.print(); // Output: 30 10 20
console.log(deque.front()); // Output: 30
console.log(deque.rear()); // Output: 20
console.log(deque.removeFront()); // Output: 30
console.log(deque.removeRear()); // Output: 20
console.log(deque.size()); // Output: 1
console.log(deque.isEmpty()); // Output: false
