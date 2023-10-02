findIntersection(head1, head2)
{
    //your code here
    let resultNode = new Node(null)
    let curNode = resultNode
    
    let c1 = head1
    let c2 = head2
    while(c1 !=null && c2 !=null ){
        if(c1.data == c2.data){
            curNode.next = new Node(c1.data)
            curNode = curNode.next
            c1 = c1.next
            c2 = c2.next
        }
        else if(c1.data <c2.data){
            c1 = c1.next
        }else{
            c2 = c2.next
        }
    }

return resultNode.next;

}