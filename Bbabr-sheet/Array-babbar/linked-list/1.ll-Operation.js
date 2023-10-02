class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LL{
    constructor(data){
        this.head = null
        this.size = 0;
    } 
    
    append(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            console.log("head",this.head)
        }else{
            let current = this.head
            
            while(current.next){
                current  = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    insertAt(data,i){
        if(i>this.size-1) return "Please enter lesss than to this size"+this.size
        const newNode = new Node(data)
        if(i == 0){
            newNode.next = this.head
            this.head = newNode
        }else{
        let curr = this.head;
        let c = 0
        let prev
        while(c<i){
             prev = curr
             curr =curr.next
             c++
            }
                newNode.next = curr
                prev.next = newNode
        }
        this.size++

    }
    removeAt(i){
                    let c = this.head

        if(i<0 || i>=this.size){
            return "Index not valid"
        }else{
            let p = c
            if(i == 0){
               this.head = c.next
            }else{
                let ct = 0
                while(ct<i){
                    p = c
                    c = c.next
                    ct++
                }
                p.next  = c.next
            }
        }
        this.size--
        return c.data
    }
    remove(data){
        let current = this.head
        let prev
    
            while(current.next){
                prev = current
                current  = current.next
            }
            prev.next = current.next
        
        this.size--
        return current.data
    }
    removeElement(e){
        let c = this.head
        let p = null
        
        while(c!=null){
              if(c.data == e){
                     if(p == null){
                       this.head = c.next
                     }else{
                          p.next = c.next
                     }
                       this.size--
                       return c.data
               }
             p = c
             c = c.next
        }
    }
    findIndex(e){
        let c = this.head
        let ct = 0
        while(e!=c.data){
            console.log(ct)
            c = c.next
            ct++
        }
        return ct
    }
}
const linkedList = new LL();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.insertAt(60,0);

// console.log(linkedList.removeElement(60))
console.log(linkedList.findIndex(60))
