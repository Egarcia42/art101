/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 14 November 2022
  * License: Public Domain
  **/

// given a number and an object that looks like this:
//          {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
  // iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    // reset output string
    var outputStr = "";
    // iterate over the factors we got from the html
    for (var factor in factorObj) {
      // check to see if this num is a multiple of factor
      if (num % factor ==0 ){
        // if yes, than add the text to output string
        outputStr += factorObj[factor];
      }
    }
    //now if we have words in outputStr, format it like this " - FizzBuzz!"
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class = 'error'>" + str + "</div>";
}

document.getElementById("submit").addEventListeer("click", function(){
  var max = document.getElementById("max").value;
  console.log("max:",max)
  if(! max) {
    reportError("You must provide a maximum"):
  }
})
