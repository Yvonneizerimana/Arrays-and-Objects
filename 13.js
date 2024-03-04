function displayDoubleOnes(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= rows; j++) {
        if (i === 1 || i === rows || j === 1 || j === rows) {
          row += "1 ";
        } else {
          row += "0 ";
        }
      }
      console.log(row);
    }
  }
  
  displayDoubleOnes(5);
  