export const sortBy = function(arr, sortByThisKey){
  var keysObj = {};
  arr.forEach(function(val, index){
    var importantVal = val[sortByThisKey]
    keysObj[importantVal] = index;
  })
  return Object.keys(keysObj).sort().map(function(importantKey){
    var properIndex = keysObj[importantKey]
    return arr[properIndex];
  })
}

export const filterBy = function(arr, filterByThisKey, filterByThisValue){
  var output = [];
  arr.map(function(obj){
    if (obj[filterByThisKey] === filterByThisValue){
      output.push(obj);
    }
  })
  return output;
}

export const groupBy = function(arrOfObjects, groupByThisKey){
  let grouped = {};
  arrOfObjects.map(function(obj){
    let groupKey = obj[groupByThisKey];
    let objInGroup = {};
    //// NEXT FEW LINES ARE COMMENTED OUT IN ORDER TO KEEP THE "GROUPBY" KEY WITHIN EACH OBJECT-
    //// it's a bit redundant, but helps keep relevant info in each object.
    let remainingKeys = Object.keys(obj).map(function(key){
      // if (key !== groupByThisKey){
        objInGroup[key] = obj[key];
      // }
    })
    if (!grouped[groupKey]){
      grouped[groupKey]= [];
      grouped[groupKey].push(objInGroup)
    } else {
      grouped[groupKey].push(objInGroup)
    }
  })
  return grouped;
}

////this one isn't so generalizable...
export const orderGrouped = function(obj){
  let timestampKeys = {}
  Object.keys(obj).map(function(key){
    let convLength = obj[key].length - 1;
    let convArr = obj[key]
    let extractedTimestamp = convArr[convLength].timestamp;
    timestampKeys[extractedTimestamp] = convArr;
  })
  return timestampKeys;
}

// {
//  1: [{message}, {message}, {message}],
//  2: [{message}, {message}, {message}],
// }
