function displayPattern(rows, columns) {
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= columns; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  
  // Example usage
  displayPattern(4, 5);