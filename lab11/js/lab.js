/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 7 November 2022
  * License: Public Domain
  **/

  $('#challenge').append('<button id=buttonChalEL> click me.</button>');

  $('#problems').append('<button id=buttonProbEL> I want to break free</button>');

  $('#results').append('<button id=buttonResEL> CLICK HERE! </button>');


  $('#buttonChalEL').click(function(){
    $('#challenge').toggleClass('special');
  });

  $('#buttonProbEL').click(function(){
    $('#problems').toggleClass('special');
  });

  $('#buttonResEL').click(function(){
    $('#results').toggleClass('special');
  });
