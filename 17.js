function determineAgeClassification(age) {
    if (age >= 0 && age <= 12) {
      return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
      return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
      return "COMMITMENT";
    } else if (age >= 46) {
      return "LEGACY";
    } else {
      return "Invalid age";
    }
  }
  
  
  console.log(determineAgeClassification(10));  
  console.log(determineAgeClassification(16));  
  console.log(determineAgeClassification(30)); 
  console.log(determineAgeClassification(50));  
  console.log(determineAgeClassification(-5));  