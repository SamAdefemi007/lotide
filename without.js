const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(` 🛑🛑🛑 array ${arr1} is not equal to array ${arr2}`);
      process.exit();
    }
  }
  console.log(`✅✅✅ array ${arr1} is equal to array ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = (itemsArrays, itemsTobeRemoved) => {
  let filteredItems = [];
  for (let i = 0; i < itemsArrays.length; i++) {
    let found = false;
    for (let j = 0; j < itemsTobeRemoved.length; j++) {
      if (itemsArrays[i] === itemsTobeRemoved[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      filteredItems.push(itemsArrays[i]);
    }
  }
  return filteredItems;
};

without([1, 2, 3, 5], [3, 5]);

assertArraysEqual(without([1, 2, 3, 5], [3, 5]), [1, 2]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
