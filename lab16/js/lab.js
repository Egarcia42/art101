//
 // * Author: Eli Garcia
//* Created: 11/23/2022
//* License: Public Domain
 //

 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://xkcd.com/",
     // The data to send (will be converted to a query string)
     data: {
       "month": "11",
       "num": 2702,
       "link": "https://xkcd.com/what-if-2",
       "year": "2022",
       "news": "",
       "safe_title": "What If 2 Gift Guide",
       "transcript": "",
       "alt": "BABIES OR LITERATURE BUT NOT BOTH: Baby shoes",
       "img": "https://imgs.xkcd.com/comics/what_if_2_gift_guide.png",
       "title": "What If 2 Gift Guide",
       "day": "23"
     },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         var comic = JSON.stringify(data);
         var comictitle = data.title;
         var comicimage = data.img;
         var comicalt = data.alt;
         console.log(comic);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
$.ajax();
