const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
        if (!eqArrays(actual[i], expected[i])) {
          return false;
        }
      } else if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = (arr1, arr2) => {
  let results = arr1.length === arr2.length;
  if (results === false) {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      results === true ? (results = arr1[i] === arr2[i]) : (results = false);
    }
  }
  results
    ? console.log(`🥳🥳🥳 Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  return results;
};

const without = (original, itemsToRemove) => {
  let remover = [];
  for (let item of original) {
    if (!itemsToRemove.includes(item)) {
      remover.push(item);
    }
  }
  return remover;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"])