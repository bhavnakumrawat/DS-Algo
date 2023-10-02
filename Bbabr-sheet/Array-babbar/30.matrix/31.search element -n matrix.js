/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    //  bruteforce o(m*n)
    // for(let i = 0;i<matrix.length;i++){
    //     for(let j = 0;j<matrix[0].length;j++){
    //        if(matrix[i][j] == target) return true
    //     }
    // }

    // o(m*n) 
    let i  = 0,j = matrix[0].length-1

    while(i<matrix.length && j>=0){
        if(matrix[i][j] == target){
             return true
        }else if(matrix[i][j]>target){
          j--
        }else {
            i++
        }
    }
    return false
};