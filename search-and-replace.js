function myReplace(str, before, after) {
const isFirstCharUpperCase = before[0] === before[0].toUpperCase();

  // Determine the replacement word based on the case of the first character
  const replacement = isFirstCharUpperCase
    ? after[0].toUpperCase() + after.slice(1)  // Make first character uppercase
    : after.toLowerCase();  // Make all characters lowercase

  // Perform the search and replace using a regular expression
  return str.replace(new RegExp(`\\b${before}\\b`, 'gi'), replacement);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");