let max_sum = 0
function checkSubtreeSum(root){
    if(root == null) return 0

    let sum = root.data + checkSubtreeSum(root.right)+checkSubtreeSum(root.left)

    max_Sum = Math.max(max_sum,sum)

    return max_sum
}