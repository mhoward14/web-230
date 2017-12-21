var header = require('../header.js');

// start program

/*
    Expected output:

    Matthew Howard
    Assignment 3.4
    December 14, 2017

    -- Display for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Display while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/

// test variable



// for loop
console.log("-- Display for loop --");
for (var x = 0; x <10; x++){
    var count = 0
    return Math.floor((Math.random() * 10) + 1);
    console.logMatch ()
}
for (var x = 0; x <10; x++){
    var count = 0
    return Math.floor((Math.random() * 10) + 1);
    console.logMisMatch ()    
}



// while loop
console.log("\n-- Display while loop --");
var index = 0;

while (index < 10) {
    console.logMatch(index);
    index++;
}



function match (){
}

function logMismatch() {
}

function logMatch() {
}



// end program

// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}