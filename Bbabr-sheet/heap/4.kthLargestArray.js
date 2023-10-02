class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      const min = this.heap[0];
      const last = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = last;
        this.heapifyDown(0);
      }
  
      return min;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp(currentIdx) {
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
        if (this.heap[currentIdx] >= this.heap[parentIdx]) {
          break;
        }
        [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
        currentIdx = parentIdx;
      }
    }
  
    heapifyDown(currentIdx) {
      while (true) {
        const leftChildIdx = 2 * currentIdx + 1;
        const rightChildIdx = 2 * currentIdx + 2;
        let smallestIdx = currentIdx;
  
        if (
          leftChildIdx < this.heap.length &&
          this.heap[leftChildIdx] < this.heap[smallestIdx]
        ) {
          smallestIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.heap.length &&
          this.heap[rightChildIdx] < this.heap[smallestIdx]
        ) {
          smallestIdx = rightChildIdx;
        }
  
        if (currentIdx === smallestIdx) {
          break;
        }
  
        [this.heap[currentIdx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[currentIdx]];
        currentIdx = smallestIdx;
      }
    }
  }
  
  function findKLargestElements(arr, k) {
    if (k <= 0) {
      return [];
    }
  
    const minHeap = new MinHeap();
  
    // Initialize the min-heap with the first k elements.
    for (let i = 0; i < k; i++) {
      minHeap.insert(arr[i]);
    }
  
    // Iterate through the remaining elements and update the min-heap.
    for (let i = k; i < arr.length; i++) {
      if (arr[i] > minHeap.heap[0]) {
        minHeap.extractMin();
        minHeap.insert(arr[i]);
      }
    }
  
    // Extract the k largest elements from the min-heap.
    const kLargestElements = [];
    while (!minHeap.isEmpty()) {
      kLargestElements.push(minHeap.extractMin());
    }
  
    return kLargestElements.reverse(); // Reverse the result to get largest elements in descending order.
  }
  
  // Example usage:
  const array = [7, 10, 4, 3, 20, 15];
  const k = 3;
  const kLargest = findKLargestElements(array, k);
  console.log(`The ${k} largest elements are: ${kLargest}`);
  