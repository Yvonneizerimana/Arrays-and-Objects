let array=[1,2,3,4,5];

let averageOfNumbers=()=>{
   let add= array.reduce((acc,a)=>acc+a);
   let average=add/5;

   console.log(average);
}
averageOfNumbers();
