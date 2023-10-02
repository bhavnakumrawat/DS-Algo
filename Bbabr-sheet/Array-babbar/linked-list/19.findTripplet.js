<script>

// Javascript implementation to count
// triplets in a sorted doubly linked list
// whose sum is equal to a given value 'x'
	
// Structure of node of doubly linked list
class Node
{
	constructor(data)
	{
		this.data = data;
		this.next = this.prev = null;
	}
}

// Function to count pairs whose sum
// equal to given 'value'
function countPairs(first, second, value)
{
	let count = 0;

	// The loop terminates when either of two pointers
	// become null, or they cross each other (second.next
	// == first), or they become same (first == second)
	while (first != null && second != null &&
		first != second && second.next != first)
	{
		
		// Pair found
		if ((first.data + second.data) == value)
		{
	
			// Increment count
			count++;
	
			// Move first in forward direction
			first = first.next;
	
			// Move second in backward direction
			second = second.prev;
		}
	
		// If sum is greater than 'value'
		// move second in backward direction
		else if ((first.data + second.data) > value)
			second = second.prev;
	
		// Else move first in forward direction
		else
			first = first.next;
	}
	
	// Required count of pairs
	return count;
}

// Function to count triplets in a sorted
// doubly linked list whose sum is equal
// to a given value 'x'
function countTriplets(head, x)
{
	
	// If list is empty
	if (head == null)
		return 0;
	
	let current, first, last;
	let count = 0;
	
	// Get pointer to the last node of
	// the doubly linked list
	last = head;
	while (last.next != null)
		last = last.next;
	
	// Traversing the doubly linked list
	for(current = head;
		current != null;
		current = current.next)
	{
		
		// For each current node
		first = current.next;
	
		// Count pairs with sum(x - current.data)
		// in the range first to last and add it
		// to the 'count' of triplets
		count += countPairs(first, last,
							x - current.data);
	}
	
	// Required count of triplets
	return count;
}

// A utility function to insert a new node at the
// beginning of doubly linked list
function insert(head, data)
{
	
	// Allocate node
	let temp = new Node();
	
	// Put in the data
	temp.data = data;
	temp.next = temp.prev = null;
	
	if ((head) == null)
		(head) = temp;
	else
	{
		temp.next = head;
		(head).prev = temp;
		(head) = temp;
	}
	return head;
}

// Driver code

// Start with an empty doubly linked list
let head = null;

// Insert values in sorted order
head = insert(head, 9);
head = insert(head, 8);
head = insert(head, 6);
head = insert(head, 5);
head = insert(head, 4);
head = insert(head, 2);
head = insert(head, 1);

let x = 17;

document.write("Count = " +
	countTriplets(head, x));

// This code is contributed by unknown2108

</script>
