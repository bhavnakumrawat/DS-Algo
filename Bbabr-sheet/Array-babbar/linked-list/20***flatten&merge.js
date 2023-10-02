    function merge(a,  b) {
        // if first linked list is empty then second
        // is the answer
        if (a == null)
            return b;
 
        // if second linked list is empty then first
        // is the result
        if (b == null)
            return a;
 
        // compare the data members of the two linked lists
        // and put the larger one in the result
        var result;
 
        if (a.data < b.data) {
            result = a;
            result.down = merge(a.down, b);
        }
 
        else {
            result = b;
            result.down = merge(a, b.down);
        }
 
        result.right = null;
        return result;
    }
 
    function flatten(root) {
        // Base Cases
        if (root == null || root.right == null)
            return root;
 
        // recur for list on right
        root.right = flatten(root.right);
 
        // now merge
        root = merge(root, root.right);
 
        // return the root
        // it will be in turn merged with its left
        return root;
    }
