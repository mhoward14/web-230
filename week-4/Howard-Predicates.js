var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.4");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Assignment 4.4
 21 December 2017

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program

// function
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
console.log("-- ORIGINAL ARRAY --");
states.forEach(function(element){
    console.log(element);
})
states.sort()
console.log("\n" + "-- SORTED ARRAY --");
states.forEach(function(element){
    console.log(element);
})

var value = "California";
/**
 * A predicate function that returns a boolean value.
 * @param {*} x 
 */
function getValue (x) {
    return x == value;
}

var filteredArray = states.filter(getValue);
console.log("\n" + "-- SELECTED VALUE --");
filteredArray.forEach(function(element){
    console.log(element);
})

// end program