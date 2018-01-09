var header = require('../header.js')

// start program

/*
    Expected output:

    Matthew Howard
    Exercise 3.3
    December 14, 2017

    //Expected output
    The enter key was pressed

*/

// Mulitway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

switch (eventKeyCode){
    case "13":
        console.log("The enter key was pressed");
        break;
    case "16":
        console.log("The shift key was pressed");
        break;
    case "32":
        console.log("The spacebar key was pressed");
        break;
    case "8":
        console.log("The backspace / delet key was pressed");
        break;
}


//end program