  {
        //this one have only 26 test case passs & getting time limit
         let lengthA = this.getLength(headA);
  let lengthB = this.getLength(headB);
  
  // Calculate the difference in lengths
  let diff = Math.abs(lengthA - lengthB);
  
  // Move the pointer of the longer list ahead by 'diff' steps
  if (lengthA > lengthB) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  } else {
    while (diff > 0) {
      headB = headB.next;
      diff--;
    }
  }
  
  // Traverse both lists to find the intersection point
  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA.data; // Intersection point found
    }
    headA = headA.next;
    headB = headB.next;
  }
  
  return null; // No intersection point found

    }
     getLength(node) {
  let length = 0;
  while (node !== null) {
    length++;
    node = node.next;
  }
  return length;
}


// This one has all test cases pass 
let temp1 = head1
while(temp1){
    temp1.visited = true
    temp = temp1.next
}
temp 1 = head2

while(temp1){
    if(temp1.visited){
        return temp1.data
    }else{
        temp1.visited = true
    }
    temp1 = temp1.visited
}
return -1