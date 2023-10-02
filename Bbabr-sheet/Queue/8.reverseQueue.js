function reverseQueue(queue) {
  if (queue.isEmpty()) {
    return;
  }

  const item = queue.dequeue();
  reverseQueue(queue);
  queue.enqueue(item);
}
