    dupSub(root)
    {
        //your code here
  const subtreeMap = {};
  this.serializeSubtree(root, subtreeMap);

  // Check if any serialized subtree occurs more than once
  for (const subtree in subtreeMap) {
    if (subtreeMap[subtree] >= 2) {
      return 1;
    }
  }

  return 0;

 
    }
    serializeSubtree(node, map) {
  if (!node) return '#';

  if(!node.left && !node.right){
      return `${node.data}`
  }
  const left = this.serializeSubtree(node.left, map);
  const right = this.serializeSubtree(node.right, map);

  const subtree = `${left},${right},${node.data}`;
//   console.log(subtree)
  // Add the serialized subtree to the hash map
  if (!map[subtree]) {
    map[subtree] = 0;
  }

  map[subtree]++;

  return subtree;

}