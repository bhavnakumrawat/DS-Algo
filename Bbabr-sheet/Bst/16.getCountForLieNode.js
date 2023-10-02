    getCount(root, low, high)
    {
        //your code here
        if(root == null ) return null
        this.getCount(root.left, low, high)
        // console.log(root.data)
        if(root.data>=low && root.data<=high){
          this.c++
        }
        
        this.getCount(root.right, low, high)
       return this.c
    }