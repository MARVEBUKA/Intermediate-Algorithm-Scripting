/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.*/




function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const [min, max] = sortedArr;

  // Initialize sum to accumulate the total sum of numbers
  let sum = 0;

  // Iterate from the smallest number (min) to the largest number (max)
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
