var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 6.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 6.2
 16 January 2018

 Catch clause: <Your message>
 Finally clause reached: End of program

 */

// start program
var myNumber = 7;

try{
    
myNumber += otherNumber;

} catch (err) {

    console.log("Error: "+ err);

} finally {

   console.log ("Finally clause reached: End of program");

}

// end program