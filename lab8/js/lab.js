/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 26 October 2022
  * License: Public Domain
  **/

function isEven(x){
  return (x % 2 == 0);
   }

  //testing
console.log("is 3 even? ", isEven(3));
console.log("is 4 even? ", isEven(4));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array", result);

var result = array.map(function(x){
  return x ** 0.5;
})
// should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result)
