var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 3.2");
console.log(headerMsg);

//start program

/*
    Expected output:

    Matthew Howard
    Exercise 3.2
    December 13, 2017

    // output from the if...else blocks
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
    */

    // functions
    function match(x, y) {
        return (x == y);    
    }

    function logMismatch(x, y) {
        console.log(x + " and " + y + " do not match!");
    }

    function logMatch(x, y) {
        console.log(x + " and " + y + " do match!"); 
    }

    // six (6) test varibles



    // Output from the match() function...
    console.log(match("A", "B"));
    console.log(match(2, 2));

    var test1 = "m";
    var test2 = "M";
    var test3 = "77";
    var test4 = "77";
    var test5 = "Hello";
    var test6 = "Goodbye";


    // Conditional "if...else" statements. Include checks for all six (6) test variables
    if (match(test1, test2)) {
        logMatch(test1, test2);
    } else {
        logMismatch(test1, test2);
    }
    if (match(test3, test4)) {
        logMatch(test3, test4);
    } else {
        logMismatch(test3, test4);
    }
    if (match(test5, test6)) {
        logMatch (test5, test6);
    } else {
        logMismatch(test5, test6);
    }

    //end program