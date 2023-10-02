var reverseList = function(head) {
     // console.log(head->next)
     // let cur  = head.next
     let prev = null
     while(head != null){
      let t = head.next
      head.next = prev
      prev = head
      head = t
      
     }
     return prev
};