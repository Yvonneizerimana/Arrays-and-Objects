function countVowels(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
 
  console.log(countVowels("Hello")); 