rowWithMax1s(arr, n, m){
    // code here
    let  j = m-1
    while(j>=0 && arr[0][j] == 1)
    {
        j--
    }
    let row = 0
    for(let i = 1;i<n;i++){
        while(j>=0&&arr[i][j]==1){
            j--
            row = i
        }
    }
    if(row == 0&& arr[0][m-1] == 0) return -1
    return row
}