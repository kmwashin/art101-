// Author: Kenice Washington Keiko Utsumi
// Date: 11/7/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu

// add event handler for button
$("button.red").click(function() {
    $(".special").toggleClass("red");
});

$("button.blue").click(function() {
    $(".special").toggleClass("blue");
});

$("button.yellow").click(function(){
  $(".special").toggleClass("yellow");
});

$("button.change").click(function(){
  $(".blue").toggleClass("yellow");
});
