//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.




function spinalCase(str) {
  str = str.replace(/[\s_]/g, '-');
  
  // Use regular expression to insert dashes between lowercase and uppercase letters
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  
  // Convert the string to lowercase
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');