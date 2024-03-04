function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      var factorial = 1;
      for (var i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  
  console.log(calculateFactorial(5));   
  console.log(calculateFactorial(0));   
  console.log(calculateFactorial(1));   
  console.log(calculateFactorial(10));  