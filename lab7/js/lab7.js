/*
*
* @file This files defines the MyClass class.
* @author @Keiko @Kenice
* @since 10.24.22
*/

// sortUserName is a function that takes user input an sorts
// the letters alphabetically
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can 'fix' it... not that there's anything wrong, you have a lovely name I'm sure...");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // return new sorted array
  return nameSorted;
}

// Output
document.writeln("I've now sorted your name according to arbitrary computer clicky clacky coding functions. Whatcha think? ",
sortUserName(), "</br>");
