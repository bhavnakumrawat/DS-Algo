let a = [[1,2,3],[4,5,6],[7,8,9]]
let sum = 0;

// sum of all element
for(let i = 0;i<a.length;i++ ){
    for(let j = 0;j<a[0].length;j++){
     sum+=a[i][j]
    }
}
console.log("---Sum of all element ::: ",sum)

// replace row with column
for(let i = 0;i<a.length;i++ ){
    for(let j = i+1;j<a[0].length;j++){
     [a[i][j],a[j][i] ]= [a[j][i],a[i][j]]
             console.log(i,j,a[i][j],a[j][i])

    }
}

console.log(a)



