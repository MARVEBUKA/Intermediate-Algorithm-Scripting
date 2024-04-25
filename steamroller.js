function steamrollArray(arr) {
    let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      // Recursively flatten nested array and concatenate to result
      result = result.concat(steamrollArray(element));
    } else {
      // Push non-array element directly to result
      result.push(element);
    }
  }

  return result;
}



steamrollArray([1, [2], [3, [[4]]]]);