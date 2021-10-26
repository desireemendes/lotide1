const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

//takes in 2 arrays, returns true or false based on perfect match

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]))