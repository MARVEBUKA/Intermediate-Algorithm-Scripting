function isPrime(n) {
  if (n <= 1) {
    return false; // 1 and numbers <= 1 are not prime
  }
  if (n <= 3) {
    return true; // 2 and 3 are prime
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false; // multiples of 2 or 3 are not prime
  }
  // Check for prime using trial division up to square root of n
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false; // n is divisible by i or i + 2
    }
  }
  return true; // n is prime
}

// Function to calculate the sum of all prime numbers less than or equal to num
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i; // Add prime number to sum
    }
  }
  return sum;
}