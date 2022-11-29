// Author: Kenice Washington Keiko Utsumi
// Date: 11/14/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu
// Using the core $.ajax() method
var endpoint = "https://pokeapi.co/api/v2/pokemon/300";

function getAPIData(){
  $.ajax({
    // The URL for the request (from the api docs)
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 300,
        

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
  .done(function(data) {
    $("#output").append("<p>" + "name:" + data.name);
    $("#output").append("<p>" + "height:" + data.height);
    $("#output").append("<p>" + "weight:" + data.weight);
    $("#ajax-button").append("<img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png'>");
  })

}

$("#ajax-button").click(getAPIData);
