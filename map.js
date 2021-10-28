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



const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
const results = [];

for (let item of array) {
  results.push(callback(item))
}
return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);