/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 24 October 2022
  * License: Public Domain
  **/

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //makes all characters lowercase, splits the characters and returns as an array, sorts the given array, and then re-joins the array into a singular string again and prints.
  var nameSorted = userName.toLower().split('').sort().join('');
  console.log("nameSorted= ", nameSorted);
  // returns the sorted string
  return nameSorted

}

var printName = document.writein("Your sorted name is", sortUserName(), "</br>");

return printName;
