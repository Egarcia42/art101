/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 17 October
  * License: Public Domain
  **/

  myMainRide = {
    make : "Honda",
    model : "Civic",
    color : "purple",
    year: 2004,
    age:function(){
      return 2022 - year;
    }
  }

  // output
  document.writeln("My Transportation Methods: ", myTransport, document.write("/n"));
  document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
  
