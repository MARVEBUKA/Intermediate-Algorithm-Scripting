/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/




function diffArray(arr1, arr2) {
  function filterNonCommonElements(firstArr, secondArr) {
    return firstArr.filter(item => !secondArr.includes(item));
  }

  const diff1 = filterNonCommonElements(arr1, arr2);
  const diff2 = filterNonCommonElements(arr2, arr1);

  return diff1.concat(diff2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);