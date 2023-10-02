  spirallyTraverse(matrix, row, column)
    {
     let op = []
    let  l = 0
    let  r = column-1
    let b = row-1
    let t = 0;
    
    let direction = 'right'
    
    while(l<=r&&t<=b){
        if(direction == 'right'){
           for(let  i = l ; i<= r ;i++){
               op.push(matrix[t][i])
           }
            t+=1;
            direction = 'down'
        }    
        else  if(direction == 'down'){
           for(let  i = t ; i<=b  ;i++){
               op.push(matrix[i][r])
           }
            r-=1;
            direction = 'left'
        } 
        else  if(direction == 'left'){
           for(let  i = r ; i>=l  ;i--){
               op.push(matrix[b][i])
           }
        b-=1;
        direction = 'up'
       } 
       else  if(direction == 'up'){
           for(let  i = b ; i>=t  ;i--){
               op.push(matrix[i][l])
           }
        l+=1;
        direction = 'right'
       } 
      
    }
 return op;
    }