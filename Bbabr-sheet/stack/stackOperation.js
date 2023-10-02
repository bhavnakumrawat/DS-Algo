class Stack{
    constructor(){
        this.item= []
    }
    push(ele){
         this.item.push(ele)
    }
     pop(){
         if(this.item.length == 0)
         return 'underflow'
        return this.item.pop()
    }
    peek(){
        console.log("peek : ",this.item[this.item.length-1])
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item && this.item.length == 0
    }
     printStack(){
         let str = ""
        for(let item of this.item){
            str+=item
        }
        return str
    }
}
let s = new Stack()
s.push(1)
// console.log("Welcome to Programiz!",s.isEmpty());

console.log("Welcome to Programiz!",s.push(1));
console.log("Welcome to Programiz!",s.push(11));
console.log("Welcome to Programiz!",s.pop());
// console.log("Welcome to Programiz!",s.isEmpty());
console.log("Welcome to Programiz!",s.peek());
// console.log("Welcome to Programiz!",s.pop());
// console.log("Welcome to Programiz!",s.pop());
// console.log("Welcome to Programiz!",s.pop());
