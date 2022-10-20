/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 17 October
  * License: Public Domain
  **/

  myTransport = [ "car, " + "bus, " + "feet.     "];

  myMainRide = {
    make : "Honda",
    model : "Civic",
    color : "purple",
    year: 2004,
    age:function(){
      return 2022 - year;
    }
  }
  space = {};

  // output
  document.writeln("My Transportation Methods: ", myTransport);
  document.writeln("My Main Ride specs: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
