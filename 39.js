function checkValueInArray(arr, value) {
    return arr.includes(value);
  }
  
  // Example usage
  console.log(checkValueInArray([1, 2, 3, 4, 5], 3));                 
  console.log(checkValueInArray(["apple", "banana", "orange"], "kiwi"));  
  console.log(checkValueInArray([true, false, true, false], true));        