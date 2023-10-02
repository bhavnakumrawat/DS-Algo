    if (head === null || head.next === null) {
        return false; // No cycle if there are less than two nodes
    }

    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false; // No cycle detected
