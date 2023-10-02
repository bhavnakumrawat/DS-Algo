var middleNode = function(head) {
    if(!head) return null
    let mid  = getMid(head)
    let c = 0
    console.log(mid)
    while(c < mid){
        head = head.next
        c++
    }
    return head
};
function getMid(head){
    let node = head
    let n = 0
    while(node){
      n++
      node = node.next? node.next:null
    }
  
    console.log(n)
    let mid = 0
     while(mid<parseInt(n/2)){
      mid++
      node = node && node.next ?node.next:''
    }
    return mid
}

//  Approch : 2
var middleNode = function(head) {
    if(!head) return null
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
