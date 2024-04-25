function pairElement(str) {
   const basePairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  // Initialize an array to store the resulting pairs
  const pairs = [];

  // Iterate through each character in the input DNA strand
  for (let char of str) {
    // Find the corresponding base pair using the mapping
    const pair = [char, basePairs[char]];

    // Push the pair into the resulting array
    pairs.push(pair);
  }

  // Return the array of pairs
  return pairs;
}

pairElement("GCG");