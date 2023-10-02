class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function mergeSortLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }

    const middle = getMiddle(head);
    const nextToMiddle = middle.next;
    middle.next = null;

    const left = mergeSortLinkedList(head);
    const right = mergeSortLinkedList(nextToMiddle);

    return merge(left, right);
}

function getMiddle(head) {
    if (!head) {
        return head;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function merge(left, right) {
    const dummyNode = new Node(-1);
    let current = dummyNode;

    while (left && right) {
        if (left.data < right.data) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left ? left : right;

    return dummyNode.next;
}

// Example usage
const node1 = new Node(3);
const node2 = new Node(1);
const node3 = new Node(4);
const node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const sortedList = mergeSortLinkedList(node1);

// Print the sorted linked list
let current = sortedList;
while (current) {
    console.log(current.data);
    current = current.next;
}
