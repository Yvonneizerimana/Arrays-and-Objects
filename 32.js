let receiveTwoNumbers=((num1,num2)=>{
  if(num1>num2){
    console.log("num1 is largest "+num1);
  }
  else if(num2>num1){
    console.log("num 2 is largest "+num2);
  }
  else{
    console.log("num1 and num 2 are equal");
  }

});
receiveTwoNumbers(10,5);