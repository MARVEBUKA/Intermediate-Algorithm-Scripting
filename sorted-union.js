function uniteUnique(...arrays) {

  const combinedArray = [].concat(...arrays);

  
  const uniqueArray = combinedArray.filter((value, index) => {
    return combinedArray.indexOf(value) === index;
  });


  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);