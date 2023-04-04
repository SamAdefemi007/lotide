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

assertArraysEqual([1, 2, 4], [1, 2, 3]);
