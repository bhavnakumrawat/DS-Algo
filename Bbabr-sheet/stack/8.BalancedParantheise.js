let exp = '{{([}])}}'
let openBrac = ["{","(","["]
let stack = []
function para(){
    for(let i = 0;i<exp.length;i++){
    if(openBrac.includes(exp[i])){
        stack.push(exp[i])
    }else{
        if(stack.length!=0){
            let top = stack[stack.length-1]
           if(
               top == '{' && exp[i] == '}'||
               top == '(' && exp[i] == ')'||
               top == '[' && exp[i] == ']'
               ){
               stack.pop()
           } else{
               return false
           }
        }else{
            return false;
        }
    }
}
return stack.length == 0
}
console.log(para())