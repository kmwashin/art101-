// Author: Kenice Washington Keiko Utsumi
// Date: 11/14/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu
function fizzBuzz(max) {
for (var num=1; num<=max; num++) {
  str = "";
  if (num % 3 == 0) {
    str = str + "FIZZ";
  }
  if (num % 5 == 0) {
    str = str + "BUZZ";
  }
  if (num % 7 == 0) {
    $("#output").append( "BOOM" + num );
  }
  else {
    str = str + num;
  }

  $("#output").append("<p>" + str + "</p>");
}

}


document.getElementById("button").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    fizzBuzz(max);


  });
