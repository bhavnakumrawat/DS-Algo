<script>
// javascript program to rotate a Doubly linked
// list counter clock wise by N times

	/* Link list node */
	class Node {
			constructor() {
				this.data = 0;
				this.prev = null;
				this.next = null;
			}
		}
	var head = null;

	// This function rotates a doubly linked
	// list counter-clockwise and updates the
	// head. The function assumes that N is
	// smallerthan size of linked list. It
	// doesn't modify the list if N is greater
	// than or equal to size
	function rotate(N) {
		if (N == 0)
			return;

		// Let us understand the below code
		// for example N = 2 and
		// list = a <-> b <-> c <-> d <-> e.
var current = head;

		// current will either point to Nth
		// or NULL after this loop. Current
		// will point to node 'b' in the
		// above example
		var count = 1;
		while (count < N && current != null) {
			current = current.next;
			count++;
		}

		// If current is NULL, N is greater
		// than or equal to count of nodes
		// in linked list. Don't change the
		// list in this case
		if (current == null)
			return;

		// current points to Nth node. Store
		// it in a variable. NthNode points to
		// node 'b' in the above example
var NthNode = current;

		// current will point to last node
		// after this loop current will point
		// to node 'e' in the above example
		while (current.next != null)
			current = current.next;

		// Change next of last node to previous
		// head. Next of 'e' is now changed to
		// node 'a'
		current.next = head;

		// Change prev of Head node to current
		// Prev of 'a' is now changed to node 'e'
		(head).prev = current;

		// Change head to (N+1)th node
		// head is now changed to node 'c'
		head = NthNode.next;

		// Change prev of New Head node to NULL
		// Because Prev of Head Node in Doubly
		// linked list is NULL
		(head).prev = null;

		// change next of Nth node to NULL
		// next of 'b' is now NULL
		NthNode.next = null;
	}

	// Function to insert a node at the
	// beginning of the Doubly Linked List
	function push( new_data) {
var new_node = new Node();
		new_node.data = new_data;
		new_node.prev = null;
		new_node.next = (head);
		if ((head) != null)
			(head).prev = new_node;
		head = new_node;
	}

	/* Function to print linked list */
	function printList(node) {
		while (node != null && node.next != null) {
			document.write(node.data + " ");
			node = node.next;
		}
		if (node != null)
			document.write(node.data);
	}

	// Driver's Code
	
		/* Start with the empty list */
		// Node head = null;

		/*
		* Let us create the doubly linked list a<->b<->c<->d<->e
		*/
		push('e');
		push('d');
		push('c');
		push('b');
		push('a');

		var N = 2;

		document.write("Given linked list <br/>");
		printList(head);
		rotate(N);
		document.write();
		document.write("<br/>Rotated Linked list <br/>");
		printList(head);

// This code contributed by aashish1995
</script>
