function sortLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let zerosHead = new Node(0);
  let onesHead = new Node(0);
  let twosHead = new Node(0);

  let zeroPtr = zerosHead;
  let onePtr = onesHead;
  let twoPtr = twosHead;

  let current = head;

  while (current) {
    if (current.value === 0) {
      zeroPtr.next = current;
      zeroPtr = zeroPtr.next;
    } else if (current.value === 1) {
      onePtr.next = current;
      onePtr = onePtr.next;
    } else {
      twoPtr.next = current;
      twoPtr = twoPtr.next;
    }
    current = current.next;
  }

  zeroPtr.next = onesHead.next ? onesHead.next : twosHead.next;
  onePtr.next = twosHead.next;

  twoPtr.next = null;

  return zerosHead.next;
}
