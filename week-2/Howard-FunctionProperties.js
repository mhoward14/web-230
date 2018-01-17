var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 2.3");
console.log(headerMsg);

// start program

/*
    Expected output:

    Matthew Howard
    Exercise 2.3
    December 4, 2017

    Hello Matthew Howard!
*/
myName.matthew = "Matthew Howard";

//function myName() {
function myName() {
    return myName.matthew;
}

// output
console.log('\n' + "Hello " + myName() + "!");



//end program