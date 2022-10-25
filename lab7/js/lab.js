/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 24 October 2022
  * License: Public Domain
  **/

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Please tell me your name");
     console.log("userName =", userName);

     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);

     return nameSorted;

}

document.writein("Your sorted name is", sortUserName(), "</br>");
