var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 5.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Assignment 5.2
 8 January 2018

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

var foodTypes = ["British", "German", "Spanish", "Italian", "Dutch"];

foodTypes.forEach(function(food){
    console.log(food)
});

// end program