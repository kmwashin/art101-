/*
*
* @file This files defines the MyClass class.
* @author @keiko @Kenice
* @since 10.30.22
*/


var outputEl =
  document.getElementById('output');

var new1El = document.createElement('h3');
  new1El.innerHTML = "I'm a new heading.";

var new2El = document.createElement('p');
  new2El.innerHTML = "I'm a new paragragh. You're seeing these new elements through Javascript!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
