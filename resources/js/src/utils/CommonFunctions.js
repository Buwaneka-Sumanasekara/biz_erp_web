import moment from 'moment';
import _ from "lodash";

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

function getAllParentsOfTree(artree, child, arKeys = [],fullobject=false) {
  if (child.id !== child.parent_id) {
    for (const node of artree) {
      if (child.parent_id === node.id) {
        if(fullobject){
          arKeys.push(node);
        }else{
          arKeys.push(`${node.id}`);
        }
      
        return getAllParentsOfTree(artree, node, arKeys,fullobject);
      }
    }
  } else {
    return arKeys;
  }
}

function getAcronym(text) {
  var acronym = "";
  if (text.length > 0) {
    var words = text.split(/\s/);

    if (words.length == 1) {
      var word = words[0];
      acronym = word.length > 2 ? word.slice(0, 2) : word;
    } else {
      var initials = words.reduce(
        (accumulator, word) => accumulator + word.charAt(0),
        ""
      );
      acronym = initials[0] + initials[initials.length - 1]; // take first and last letters
    }
  }
  return acronym.toUpperCase();
}

function getAcronymColor(text) {
  // get first alphabet in upper case
  const firstAlphabet = text.charAt(0).toLowerCase();

  // get the ASCII code of the character
  const asciiCode = firstAlphabet.charCodeAt(0);

  // number that contains 3 times ASCII value of character -- unique for every alphabet
  const colorNum =
    asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = (num >> 16) & 255;
  var g = (num >> 8) & 255;
  var b = num & 255;

  return "rgb(" + r + ", " + g + ", " + b + ", 0.8)";
}

function generateGreetings() {
  var currentHour = moment().format('HH');
  if (currentHour >= 5 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Afternoon';
  } else if (currentHour >= 17 && currentHour > 5) {
    return 'Evening';
  } else {
    return 'Hello';
  }
}

function getUniqueArray(ar1,ar2,key=""){
  console.log(ar1,ar2,key);
    if(key!==""){
      return _.uniqBy(_.concat(ar1,ar2),key);
    }else{
      return _.uniq(_.concat(ar1,ar2));
    }
}

export default {
  getAccessTokenByState: getAccessTokenByState,
  getTreeStructure,
  getAllParentsOfTree,
  getAcronym,getAcronymColor,generateGreetings,
  getUniqueArray:getUniqueArray
};
