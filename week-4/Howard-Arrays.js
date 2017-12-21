var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 4.2
 20 December 2017

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program


// function
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];
   
function getFruit(fruitArray){

    fruitArray.sort();

    console.log(fruitArray);

}

    console.log(getFruit(fruit));




// end program