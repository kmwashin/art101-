// Author: Kenice Washington Keiko Utsumi
// Date: 11/8/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu

function sortingHat(name) {
  //get length of name
  var length = name.length;

  // get mod of name
  var mod = length % 4;

//mod ==0
  if (mod == 0){
    var animal = "deer";
  }
  //mod == 1
  else if (mod == 1) {
    var animal = "turkey";
  }
  //mod ==2
  else if (mod == 2) {
    var animal = "rabbit";
  }
  //mod == 3 or something other than 0-2
  else {
    var animal = "squirrel";
  }
  return animal;
}




//add a click handler for button
$("#button").click(function() {


  // get input from field
  var name = $("#input").val();
  //sort Results
  var houseStr = sortingHat(name);
  //output the result
  $("#output").html("You're a silly little critter: " + houseStr);
});
