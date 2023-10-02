removeDuplicates(head)
{
    //your code here
    let map = new Set();
    
    let cur = head
    let prev = null
    while(cur ){
        if(map.has(cur.data)){
         prev.next = cur.next
        }else{
            map.add(cur.data)
            prev = cur
        }
        cur = cur.next
    }
    
    // console.log(head)
    return head
}