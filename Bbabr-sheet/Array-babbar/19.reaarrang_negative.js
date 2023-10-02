const a = [ 1, 2, 3, -4, -1, 4]
const n = a.length

let  l = 0;
let r = n-1;

while(l<r){
    if(a[l]<0){
        l++
    } else if(a[r]>0){
        r--
    }else{
        [a[l],a[r]] = [a[r],a[l]]
        l++;
        r--
    }
}

console.log("Welcome to Programiz!",a);