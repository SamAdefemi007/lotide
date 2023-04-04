// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  if (arr.length < 1) {
    return;
  }
  return arr[0];
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
