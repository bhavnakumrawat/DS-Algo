  divide(N,head){
    //code here
 let evenHead = new Node(0); // Dummy node for even nodes
let oddHead = new Node(0); // Dummy node for odd nodes
let evenTail = evenHead;
let oddTail = oddHead;
let current = head;
while (current) {
if (current.data % 2 === 0) {
evenTail.next = current;
evenTail = evenTail.next;
} else {
oddTail.next = current;
oddTail = oddTail.next;
}
current = current.next;
}
evenTail.next = oddHead.next;
oddTail.next = null;
return evenHead.next;

    
     
  }