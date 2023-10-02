function minValue(root) {
    // your code here
    if(root === null) return -1
    
let temp = root
while(temp && temp.left){
    temp = temp.left
}
return temp.data
}