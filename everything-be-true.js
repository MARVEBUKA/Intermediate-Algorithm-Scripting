function truthCheck(collection, pre) {
  for (let item of collection) {
    // Check if the current object does not have the specified property or if its value is falsy
    if (!item.hasOwnProperty(pre) || !item[pre]) {
      // If any object fails the check, return false
      return false;
    }
  }
  // If all objects pass the check, return true
  return true;

}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");