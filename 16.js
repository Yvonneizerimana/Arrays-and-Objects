var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

// Function to sort and arrange elements in ascending order
function sortAndArrange(array) {
  // Sort the array in ascending order
  array.sort(function(a, b) {
    return a - b;
  });

  // Get the last 3 numbers
  var lastThree = array.slice(-3);

  // Get the first 3 numbers
  var firstThree = array.slice(0, 3);

  // Combine the last 3 numbers, sorted array, and first 3 numbers
  var result = lastThree.concat(array, firstThree);

  return result;
}

// Call the function and display the sorted and arranged array
var sortedArray = sortAndArrange(numbers);
console.log(sortedArray);

// Display the first 3 numbers
var firstThreeNumbers = sortedArray.slice(0, 3);
console.log(firstThreeNumbers);