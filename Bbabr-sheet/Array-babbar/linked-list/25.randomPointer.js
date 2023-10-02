class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

const cloneLinkedList = (head) => {
    if (!head) {
        return null;
    }

    // Step 1: Duplicate each node and insert it after the original node
    let current = head;
    while (current) {
        const newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }

    // Step 2: Adjust random pointers for duplicated nodes
    current = head;
    while (current) {
        current.next.random = current.random ? current.random.next : null;
        current = current.next.next;
    }

    // Step 3: Separate the original and cloned linked lists
    const clonedHead = head.next;
    current = head;
    while (current) {
        const clonedNode = current.next;
        current.next = clonedNode.next;
        current = current.next;
        clonedNode.next = current ? current.next : null;
    }

    return clonedHead;
};

// Example usage
const originalNode1 = new Node(1);
const originalNode2 = new Node(2);
const originalNode3 = new Node(3);

originalNode1.next = originalNode2;
originalNode1.random = originalNode3;
originalNode2.next = originalNode3;
originalNode2.random = originalNode1;
originalNode3.random = originalNode2;

const clonedHead = cloneLinkedList(originalNode1);
console.log(clonedHead); // The head of the cloned linked list
