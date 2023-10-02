    splitList(node,head1,head2)
    {
        //your code here
    if (!node || !node.next) {
        return [node, null]; // Return the original node and null for the second half
    }

    let slow = node;
    let fast = node;

    // Move slow by one step and fast by two steps
    while (fast && fast.next !== node && fast.next.next !== node) {
        slow = slow.next;
        fast = fast.next.next;
    }

     head1 = node;
     head2 = slow.next;

    // Close the first half
    slow.next = head1;

    // Move the pointer to the last node of the second half
    let current = head2;
    while (current.next !== node) {
        current = current.next;
    }
    // Close the second half
    current.next = head2;

    return [head1, head2];

    }