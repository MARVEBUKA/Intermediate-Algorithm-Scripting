function fearNotLetter(str) {
 const letters = str.split('');
  let prevCharCode = letters[0].charCodeAt(0);
  
  
  for (let i = 1; i < letters.length; i++) {
    const currentCharCode = letters[i].charCodeAt(0);
    
    if (currentCharCode - prevCharCode > 1) {
      
      const missingCharCode = prevCharCode + 1;
    
      return String.fromCharCode(missingCharCode);
    }
    
    prevCharCode = currentCharCode;
  }
  
  return undefined;
}

fearNotLetter("abce");