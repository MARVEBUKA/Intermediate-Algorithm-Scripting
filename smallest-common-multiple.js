function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Helper function to calculate the Least Common Multiple (LCM) of two numbers
function lcm(a, b) {
  return (Math.abs(a * b)) / gcd(a, b);
}

// Function to find the smallest common multiple of the numbers in a given range
function smallestCommons(arr) {
  // Sort the input array to get the minimum (min) and maximum (max) values
  let [min, max] = arr.sort((a, b) => a - b);

  // Initialize lcmValue to the first number in the range
  let lcmValue = min;

  // Iterate through the range to calculate the LCM
  for (let i = min + 1; i <= max; i++) {
    lcmValue = lcm(lcmValue, i);
  }

  return lcmValue;
}