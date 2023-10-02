function check(){
     let s1 = "ABCD", s2 = "ACBD"
    for(let  i =0;i<s1.length;i++){
        let r_s = s1.substring(i+1,s1.length)+s1.substring(0,i+1)
        if(r_s  == s2){
            return true
        }
    }
    return false
}
console.log("Welcome to Programiz!",check());