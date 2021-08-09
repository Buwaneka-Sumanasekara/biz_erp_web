async function getAccessTokenByState(getState) {
  let state = await getState();
  let userobj = state.user;
  if (userobj.token !== undefined) {
    return userobj.token;
  } else {
    return '';
  }
}

function getTreeStructure(dataset){
  const hashTable = Object.create(null);
  dataset.forEach(aData => hashTable[aData.id] = {...aData, childNodes: []});
  const dataTree = [];
  dataset.forEach(aData => {
    if(aData.id!==aData.parent_id) hashTable[aData.parent_id].childNodes.push(hashTable[aData.id])
    else dataTree.push(hashTable[aData.id])
  });
  return dataTree;
}

export default {
  getAccessTokenByState: getAccessTokenByState,getTreeStructure
};
