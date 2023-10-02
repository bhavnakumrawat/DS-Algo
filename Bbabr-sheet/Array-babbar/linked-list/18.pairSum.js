function pairSum(head, x)
{
 
    // Set two pointers, first
    // to the beginning of DLL
    // and second to the end of DLL.
    let first = head;
    let second = head;
    while (second.next != null)
        second = second.next;
  
    // To track if we find a pair or not
    let found = false;
  
    // The loop terminates when
    // they cross each other (second.next
    // == first), or they become same
    // (first == second)
    while ( first != second && second.next != first)
    {
     
        // pair found
        if ((first.data + second.data) == x)
        {
            found = true;
            document.write( "(" + first.data +
                                ", "+ second.data + ")<br>" );
  
            // move first in forward direction
            first = first.next;
  
            // move second in backward direction
            second = second.prev;
        }
        else
        {
            if ((first.data + second.data) < x)
                first = first.next;
            else
                second = second.prev;
        }
    }
  
    // if pair is not present
    if (found == false)
        document.write("No pair found<br>");
}
