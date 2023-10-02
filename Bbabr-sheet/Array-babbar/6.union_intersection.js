 let a1 = [1, 3, 4, 5, 7]
 let a2 = [2, 3, 5, 6,8,9,12]
 
 let n1 = a1.length-1
 let n2 = a2.length-1
 
 let i = 0 , j = 0;
 const set = new Set()
 while(n1>=i && n2>=j){
     if(a1[i]<a2[j]){
         set.add(a1[i])
         i++
     } else{
         set.add(a2[j])
         j++
     }
 }
 while(n1>=i){
     set.add(a1[i])
     i++
 }
 while(n2>=j){
     set.add(a2[j])
     j++
 }
 console.log(set)

//  Intersection
let a1 = [1, 3, 4,3, 5, 7]
let a2 = [2, 3, 5,3, 6,8,9,12]

let n1 = a1.length

const map = new Map()
let  op = []

for(let i = 0;i<n1;i++){
   let set_val = map.get(a1[i])?map.get(a1[i])+1:1
   map.set(a1[i],set_val)
}
for(let item of a2){
  if(map.has(item) && map.get(item)!=0){
     c =  map.get(item)
     map.set(item,map.get(item)-1)
     op.push(item)
  }
}
console.log(op)