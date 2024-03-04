function stringModifier(str, position, replacementChar) {
    if (position < 0 || position >= str.length) {
      return "Invalid position";
    }
  
    var modifiedString = str.substring(0, position) + replacementChar + str.substring(position + 1);
    return modifiedString;
  }

  console.log(stringModifier("Hello", 2, "x"));