// CircularQueue class
class CircularQueue {
  constructor(k) {
    this.items = new Array(k);
    this.maxSize = k;
    this.front = -1;
    this.rear = -1;
  }

  // enqueue method to add an element to the queue
  enqueue(element) {
    if (this.isFull()) {
      return "Overflow";
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.items[this.rear] = element;
  }

  // dequeue method to remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedElement = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    return removedElement;
  }

  // front method to get the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.items[this.front];
  }

  // rear method to get the rear element of the queue
  rear() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.items[this.rear];
  }

  // isFull method to check if the queue is full
  isFull() {
    return (
      (this.rear + 1) % this.maxSize === this.front &&
      this.front !== -1
    );
  }

  // isEmpty method to check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // size method to get the size of the queue
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    if (this.rear >= this.front) {
      return this.rear - this.front + 1;
    }
    return this.maxSize - this.front + this.rear + 1;
  }

  // print method to display the elements of the queue
  print() {
    if (this.isEmpty()) {
      console.log("No elements in the queue");
      return;
    }

    let str = "";
    let currIndex = this.front;
    while (currIndex !== this.rear) {
      str += this.items[currIndex] + " ";
      currIndex = (currIndex + 1) % this.maxSize;
    }
    str += this.items[currIndex];
    console.log(str);
  }
}

// Example usage
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.print(); // Output: 10 20 30
console.log(circularQueue.front()); // Output: 10
console.log(circularQueue.rear()); // Output: 30
console.log(circularQueue.dequeue()); // Output: 10
console.log(circularQueue.size()); // Output: 2
console.log(circularQueue.isEmpty()); // Output: false
