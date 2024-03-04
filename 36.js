function countConsonants(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (/^[a-z]+$/.test(char) && !vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  
  console.log(countConsonants("Hello"));       