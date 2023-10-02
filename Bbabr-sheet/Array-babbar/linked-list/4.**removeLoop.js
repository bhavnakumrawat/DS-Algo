 removeLoop(head)
    {
        //your code here
        let sp = this.getSp(head)//start pointer
        // console.log("sp",sp)
        let temp = sp
        
        while(temp && temp.next !== sp){
            temp = temp.next
        }
         temp.next = null
        
        return temp
        console.log(temp)
    }
    getSp(head){
        if(!head) return head
        let s = head//slow
        let f = head;//fast
        while(f !=null && f.next !=null){
            s = s.next
            f = f.next.next
            if(s == f){
              return s  
            }
        }
    }
    