class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findFirstNodeInLoop(head) {
    let slow = head;
    let fast = head;

    // Detect cycle and find meeting point
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            break; // Meeting point of the cycle
        }
    }

    if (fast === null || fast.next === null) {
        return null; // No cycle
    }

    slow = head;

    // Move both pointers until they meet at the first node of the loop
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // First node of the loop
}

// Example usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle

const firstNodeInLoop = findFirstNodeInLoop(node1);
console.log(firstNodeInLoop); // Output: node2 (first node of the loop)
