/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 31 October 2022
  * License: Public Domain
  **/

var outputEl = document.getElementById("Output");

var new1El = document.createElement("p");
var new2El = document.createElement("p");

new1El.innerHTML="I like money";
new2El.innerHTML="I eat coins off the street";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontFamily="Helvetica";
new2El.style.fontSize="40px";
