    compute(head)
    {
    //your code here
      head  = this.reverse(head)
      let cur  = head
      let ma = head.data
      let prev = head
      head  = head.next
      while(head){
          if(head.data >=ma){
              ma = head.data
              prev = head
              head = head.next
          }else{
              prev.next = head.next
              head = prev.next
          }
      }
      head  = this.reverse(cur)
      return head
    }
    reverse(head){
        let cur = head
        let prev = null
        while(cur){
            let t = cur.next
            cur.next = prev
            prev  = cur
            cur = t
        }
        // console.log(cur)
        return prev
    }