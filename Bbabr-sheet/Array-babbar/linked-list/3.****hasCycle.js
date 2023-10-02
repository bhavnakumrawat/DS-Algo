// floyd cycle detection
var hasCycle = function(head) {
  if(!head || !head.next){
    return false
  }

  let s = head //slow
  let f = head.next//fast

  while(s!=f){
      if(!f || !f.next) return false
      s = s.next
      f = f.next.next
  }
  return true
};
detectNode(head){
  let slow = head
  let fast = head
  while(fast!=null && fast.next !=null){
    slow = slow.next
    fast = fast.next.next
    if(slow == fast){
      return slow
    }
  }
  return null
}
detectFirst(head){
  let meet = detectNode(head)
  let start = head
  while(start!=meet){
    start = start.next
    meet = meet.next
  }
  return start
}