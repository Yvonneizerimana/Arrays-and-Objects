function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
  
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    }
  }
 
  var weight = 70;    
  var height = 1.75;  
  
  var bmiClassification = calculateBMI(weight, height);
  console.log("BMI Classification:", bmiClassification);