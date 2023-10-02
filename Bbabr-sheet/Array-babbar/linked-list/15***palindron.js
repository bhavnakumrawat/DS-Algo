class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) {
        return true; // Empty or single-node list is a palindrome
    }

    // Step 1: Find the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Step 2: Split the linked list into two halves
    let firstHalfEnd = head;
    let secondHalfStart = head;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        firstHalfEnd = secondHalfStart;
        secondHalfStart = secondHalfStart.next;
    }

    // Step 3: Reverse the second half
    let prev = null;
    let current2 = secondHalfStart;
    while (current2) {
        const nextNode = current2.next;
        current2.next = prev;
        prev = current2;
        current2 = nextNode;
    }

    // Step 4: Compare the first half with the reversed second half
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf) {
        if (firstHalf.data !== secondHalf.data) {
            return false; // Not a palindrome
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true; // It's a palindrome
}

// Example usage
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(2);
list.next.next.next.next = new Node(1);

console.log("Is the linked list a palindrome?", isPalindrome(list)); // Output: true
