/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 14 November 2022
  * License: Public Domain
  **/

function fizzBuzz(){

  for (i=1; i <= 200; i++) {
    var newStr = "";
    if (i % 3 == 0) {
      newStr = newStr + "Fizz";
      }
    if (i % 5 == 0) {
      newStr = newStr + "Buzz";
    }
    if (i % 7 == 0 ) {
      newStr = newStr + "Boom";
    }
    if (newStr.length > 0) {
      $("#output").append("<p> "+newStr+" </p>");
    }
    else{
      $("#output").append("<p> "+i+" </p>");
    }
  }
}

$("#submit").click(function(){
  fizzBuzz();
});
