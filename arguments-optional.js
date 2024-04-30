function addTogether() {
  // Check if both arguments are numbers
  function isValidNumber(num) {
    return typeof num === 'number';
  }

  // Check if arguments are valid numbers
  if (arguments.length === 2 && isValidNumber(arguments[0]) && isValidNumber(arguments[1])) {
    // If both arguments are valid numbers, return their sum
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1 && isValidNumber(arguments[0])) {
    // If only one argument is provided and it's a valid number, return a function
    let firstArg = arguments[0];
    return function(secondArg) {
      // Check if the second argument is a valid number
      if (isValidNumber(secondArg)) {
        // If valid, return the sum of the first and second arguments
        return firstArg + secondArg;
      } else {
        // If not valid, return undefined
        return undefined;
      }
    };
  } else {
    // If arguments are not valid, return undefined
    return undefined;
  }
}


console.log(addTogether(2, 3)); // Output: 5

