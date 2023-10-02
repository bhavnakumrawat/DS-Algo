reverseDLL(head){
      //code here
      if(!head) return null
      
      let cur = head // current
      let p = cur // prev
      let n = head// next
      
      while(cur !=null && cur.next){
           n = cur.next
          cur.next = p
          cur.prev = n
          p = cur
          cur = n
      }
      return p
  }


  // also check k group reverse