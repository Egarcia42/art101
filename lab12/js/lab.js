/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 9 November 2022
  * License: Public Domain
  **/

  function sortingHat(str){
  len=str.length;
  mod = len % 4;

  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById('button');
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "The Sorting Hat has sorted you into: " + house;
  document.getElementById("output").innerHTML = newText
})
