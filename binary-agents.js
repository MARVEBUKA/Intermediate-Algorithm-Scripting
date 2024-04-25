function binaryAgent(str) {
  // Split the binary-encoded string into an array of binary strings
  let binaryArray = str.split(' ');

  // Convert each binary string to its decimal equivalent and then to ASCII character
  let decodedChars = binaryArray.map(binaryString => {
    // Convert binary string to decimal (integer)
    let decimalValue = parseInt(binaryString, 2);
    // Convert decimal value to ASCII character
    return String.fromCharCode(decimalValue);
  });

  // Join the array of characters into a single string
  let decodedString = decodedChars.join('');

  return decodedString;
}

// Test the function
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Output: "Aren't bonfires fun!?"
