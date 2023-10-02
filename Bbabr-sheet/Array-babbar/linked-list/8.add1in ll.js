class Solution {
    addOne(node)
    {
        //your code here
        this.reverse(head)
        this.addOneUtill(head)
        this.reverse(head)
    }
    addOneUtill(head){
        let cur = head
        let sum,temp , carry =1
        
        while(cur){
            sum = cur.data+carry
            
            carry = sum>=10 ?1:0
            sum = sum%10
            cur.data = sum
            temp  = head
            cur = cur.next
        }
        if(carry>0){
            temp.next = carry
        }
        return  head
    }
    reverse(head){
        let cur = head
        let prev = null
        
        while(cur){
            let t  = cur.next
            cur.next = prev
            prev = cur
            cur = t
        }
        return  head
    }
}
