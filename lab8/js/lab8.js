
/*
*
* @file This files defines the MyClass class.
* @author @Keiko @Kenice
* @since 10.27.22
*/

function plus(x) {
    return (x + 10);
}

// test function
console.log("What's 1+10?", plus(1));
console.log("What's 20+10?", plus(20));

array = [0, 13, 27, 19, 6, 45, 80]
console.log("My array!", array);

var result = array.map(plus);
// should return [10, 23, 37, 29, 16, 55, 90]
console.log("Increase my array by 10:", result);

var result = array.map(function(x){
  return x 10;
})
//should return [0, 130, 270, 190, 60, 450, 800]
console.log("Multiply my array by 10:", result);
