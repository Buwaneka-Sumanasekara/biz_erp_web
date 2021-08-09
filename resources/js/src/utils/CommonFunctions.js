async function getAccessTokenByState(getState) {
  let state = await getState();
  let userobj = state.user;
  if (userobj.token !== undefined) {
    return userobj.token;
  } else {
    return "";
  }
}

function getTreeStructure(dataset) {
  const hashTable = Object.create(null);
  dataset.forEach(
    (aData) => (hashTable[aData.id] = { ...aData, childNodes: [] })
  );
  const dataTree = [];
  dataset.forEach((aData) => {
    if (aData.id !== aData.parent_id)
      hashTable[aData.parent_id].childNodes.push(hashTable[aData.id]);
    else dataTree.push(hashTable[aData.id]);
  });
  return dataTree;
}

function getAllParentsOfTree(artree, child, arKeys = []) {

  if (child.id !== child.parent_id) {
    for (const node of artree) {
      if (child.parent_id === node.id) {
        arKeys.push(`${node.id}`); 
        return getAllParentsOfTree(artree,node,arKeys);
      }
    }
  }else{
    return arKeys;
  }
}

export default {
  getAccessTokenByState: getAccessTokenByState,
  getTreeStructure,
  getAllParentsOfTree,
};
