const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log("--- These tests should pass: ---")
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual([], []); // pass

console.log("--- These tests should fail: ---")
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // fail