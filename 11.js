function displayTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "1 ";
      }
      console.log(row);
    }
  }
  
  // Example usage
  displayTriangle(4)