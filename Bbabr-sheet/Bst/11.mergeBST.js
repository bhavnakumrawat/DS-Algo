mergeBST(root1,roo2){
   let head1 = null
   bstToDll(root1,head1)
   head1.left = null

   let head2 = null
   bstToDll(root2,head2)
   head2.left = null

   let head = merge2DLL(head1,head2)

   return sortLLToBST(head, countNode(head))
}
bstToDll(root,head){

    if(!root) return null
    bstToDll(root.right,head)
    root.right = head
    if(head){
        head.left = root
    }
    head = root
    bstToDll(root.left,head)
}
merge2DLL(head1,head2){

    let head = null
    let tail = null
    while(head1 && head2){
        if(head1.data<head2.data){
          if(head1 == null){
           head = head1
           tail = head1
           head1 = head1.right
          }else{
            tail.right = head1
            head1.left = tail
            tail = head1
            head1 = head1.right
          }
        }else{
            if(head2 == null){
                head = head2
                tail = head2
                head2 = head2.right
               }else{
                 tail.right = head2
                 head2.left = tail
                 tail = head2
                 head2 = head2.right
               }
        }
        while(head1){
            tail.right = head1
            head1.left = tail
            tail = head1
            head1 = head1.right
        }
        while(head2){
            tail.right = head2
            head2.left = tail
            tail = head2
            head2 = head2.right
        }
    }
}

sortLLToBST(head,n){
   if(n<=0 || head == null) return null

   let left = sortLLToBST(head,n/2)

   let root = head
   root.left = left
   root.right = sortLLToBST(head,n-n/2-1)

   return root
}
countNode(head){
    let count= 0
    let t = head
    while(t){
        ++count;
        t = t.right
    }
    return count
}