var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 4.3
 21 December 2017

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 --SELECTED VALUE --
 Bus

 */

// start program



// function
var vehicle = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


/**
 *This function lists all the elements in the array,
 * and then filters the element from the array based on the value
 * of the value argument.
 * * @param {*} array 
 * @param {*} value 
 */
function getValue(array, value) {
    console.log("\n" + "-- DISPLAYING ARRAY ITEMS --");
    array.forEach(function(element){
        console.log(element);
    });
    console.log("\n" + "-- SELECTED HEADER --")
    array.forEach(function(element){
        if(element == value){
            console.log(element);
        }
    });
}
getValue(vehicle, "Car");


// end program