/**
  * Author: Eli Garcia <egarc151@ucsc.edu>
  * Created: 21 November 2022
  * License: Public Domain
  **/

   // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://yesno.wtf/#api",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)
             "answer": "yes",
             "forced": false,
             "image": "https://yesno.wtf/assets/yes/2.gif"
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })

   var myButton = document.getElementById('activate');
    myButton.addEventListener("click", function(){
      document.getElementById("output").innerHTML
    })
