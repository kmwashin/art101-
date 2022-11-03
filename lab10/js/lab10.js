// Author: Kenice Washington Keiko Utsumi
// Date: 11/1/2022
// Email: klutsumi@ucsc.edu
//Email: kmwashin@ucsc.edu

function sortUserName(inputName) {
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var nameSorted = sortedArray.join('');

  return(nameSorted);
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener('click', function() {
  var enteredName = document.getElementById("user-name").value;
  var nameSorted = sortUserName(enteredName);
  outputEl.innerHTML = nameSorted;
});




// Here is Wes Modes Anagram. This was created using Wes Modes' example from lab7.
// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}
var buttonElan = document.getElementById("my-button-an");

var outputElan = document.getElementById("output-an");

buttonElan.addEventListener('click', function() {
  var userName = document.getElementById("user-name-an").value;
  var newName = randomizeName(userName);
  outputElan.innerHTML = newName;
});
