  sortedMatrix(N,matrix){
       //code here
       matrix.sort((a,b)=>a[0]-b[0])
      return matrix;
    }


    let r = matrix.length-1
    let c = matrix[0].length-1
     for(let i = 0;i<r;i++){
           for(let j = 0;j<c;j++){
               for(let k = 0;k<r;k++){
                   for(let l = 0;l<c;l++){
                      if(matrix[i][j]<matrix[k][l]){
                          [matrix[i][j],matrix[k][l]] = [matrix[k][l],matrix[i][j]]
                      }
                    }  
                } 
           } 
     }
     return matrix