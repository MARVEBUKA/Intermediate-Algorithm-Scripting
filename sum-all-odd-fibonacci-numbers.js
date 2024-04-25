function sumFibs(num) {
 let prev = 0;
  let current = 1;
  let sum = 0;

  // Iterate through the Fibonacci sequence
  while (current <= num) {
    // Add current Fibonacci number to sum if it's odd
    if (current % 2 !== 0) {
      sum += current;
    }

    // Generate the next Fibonacci number
    let next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

sumFibs(4);