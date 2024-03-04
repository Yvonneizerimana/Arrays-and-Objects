function countCharacters(str) {
    var count = 0;
  
    // Remove spaces from the string
    var stringWithoutSpaces = str.replace(/\s/g, '');
  
    // Count the number of characters
    count = stringWithoutSpaces.length;
  
    return count;
  }
  

  var string = "Hello World";
  var characterCount = countCharacters(string);
  console.log("Number of characters:", characterCount);