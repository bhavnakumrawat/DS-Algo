//Sort an array of 0s, 1s and 2s | Dutch National Flag problem

const a = [0,1,0,1, 2, 1, 2, 0]

let low = 0
let mid = 0
let high = a.length-1

while(mid<=high){
    if(a[mid] == 0){
        [a[low],a[mid]] = [a[mid],a[low]]
        mid++
        low++
     }else if(a[mid]==1){
         mid++
     }else{
         [a[mid],a[high]] =[a[high],a[mid]]
         high--
     }
}
console.log(a)

/*
1.1 : Move all negative numbers to beginning and positive to end with constant extra space
Output: -12 -13 -5 -7 -3 -6 11 6 5
Dutch
*/

const a = [-12, 11, -13, -5, 6, -7, 5, -3, -6]

let low = 0
let high = a.length-1

while(low<high){
    if(a[low] < 0){
        low++
     }else if(a[high] >1){
         high--
     }else{
         [a[low],a[high]] =[a[high],a[low]]
     }
}
console.log("op",a)
/*
1.2 : Move all negative numbers to beginning and positive to end with constant extra space
Output: -12 -13 -5 -7 -3 -6 11 6 5
partitions
*/
const a = [-12, 11, -13, -5, 6, -7, 5, -3, -6]

let j = 0
let n = a.length

for(let i =0;i<n;i++){
    if(a[i] < 0)
        {
            if(i!=j){
                [a[i],a[j]] = [a[j],a[i]]
            }
            j++
        }
}
console.log("op",a)

/*
1.3 : Move all negative numbers to beginning and positive to end with constant extra space
Output: -12 -13 -5 -7 -3 -6 11 6 5
2 pointer
*/
const a = [-12, 11, -13, -5, 6, -7, 5, -3, -6]

let i = 0
let j = a.length

while(i<=j){
    if(a[i]<0 && a[j]<0){
        i++
    }else if(a[i]>0 && a[j]>0){
        j--
    }else if(a[i]>0 && a[j]<0){
        [a[i],a[j]] = [a[j],a[i]]
        i++;
        j--;
    }else{
        i++;
        j--
    }
}
console.log("op",a)

const a = [12, 11, -13, -5, 6, -7, 5, -3, 6]

let j = 0
let n = a.length

console.log(a)
while(j<=n){
    if(a[n]<0 && a[j]>=0){
        [a[n],a[j]] = [a[j],a[n]]
        n--
        j++
    }else if(a[j]<0){
        j++
    }else{
        n--
    }
}
console.log(a)