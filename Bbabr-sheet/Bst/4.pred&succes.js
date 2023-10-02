function predSucces(root,key){
    let t = root
    if(t.data !== key){
        if(t.data<key){
            pred = t.data
            t = t.right
        }else{
            succ = t.data
            t = t.left
        }
    }
    let lt = t.left
    while(lt !=null){
     lt = lt.left
     pred = lt.data
    }
    let rt = t.right
    while(rt !=null){
     rt = rt.left
     pred = rt.data
    }
    return {pred,succ}
}