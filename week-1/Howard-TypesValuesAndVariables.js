/*
=============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   28 November 2017
; Modified By: Matthew Howard
; Description: This program demonstrates the
;   use of JavaScript types, values, and
;   variables in an application.
;============================================
*/

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Matthew";
var myLastName = "Howard";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5"

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n")

// start of program - your code goes below this line
var newLine = "\n"

var firstName0 = "Matthew";
var middleName0 = "R.";
var lastName0 = "Howard";
var address0 = "8 Am Friedhof";
var payRate0 = 32.50;
var hireDate0 = new Date("February 1, 2017");

var recordString0 = "First Name: " + firstName0 + newLine + "Middle Name: " +
middleName0 + newLine + "Last Name: " + lastName0 + newLine + "Address: " +
address0 + newLine + "Pay Rate: " + payRate0.toString() +newLine + "Hire Date: " +
hireDate0.toLocaleDateString();

console.log(recordString0 + newLine.repeat(2));

var firstName1 = "David";
var middleName1 = "G.";
var lastName1 = "DeGea";
var address1 = "45 Chester Rd";
var payRate1 = 32.50;
var hireDate1 = new Date("August 21, 2012");

var recordString1 = "First Name: " + firstName1 + newLine + "Middle Name: " +
middleName1 + newLine + "Last Name: " + lastName1 + newLine + "Address: " +
address1 + newLine + "Pay Rate: " + payRate1.toString() +newLine + "Hire Date: " +
hireDate1.toLocaleDateString();

console.log(recordString1 + newLine.repeat(2));

var firstName2 = "Eric";
var middleName2 = "O.";
var lastName2 = "Cantona";
var address2 = "1 Wharfside Way";
var payRate2 = 32.50;
var hireDate2 = new Date("June 16, 1997");

var recordString2 = "First Name: " + firstName2 + newLine + "Middle Name: " +
middleName2 + newLine + "Last Name: " + lastName2 + newLine + "Address: " +
address2 + newLine + "Pay Rate: " + payRate2.toString() +newLine + "Hire Date: " +
hireDate2.toLocaleDateString();

console.log(recordString2 + newLine.repeat(2));

var firstName3 = "Paul";
var middleName3 = "R.";
var lastName3 = "Scholes";
var address3 = "86 Cavendish Rd";
var payRate3 = 32.50;
var hireDate3 = new Date("September 1, 1999");

var recordString3 = "First Name: " + firstName3 + newLine + "Middle Name: " +
middleName3 + newLine + "Last Name: " + lastName3 + newLine + "Address: " +
address3 + newLine + "Pay Rate: " + payRate3.toString() +newLine + "Hire Date: " +
hireDate3.toLocaleDateString();

console.log(recordString3 + newLine.repeat(2));

var firstName4 = "Ryan";
var middleName4 = "NMI";
var lastName4 = "Giggs";
var address4 = "Sir Matt Busby Way";
var payRate4 = 65.00;
var hireDate4 = new Date("July 1, 1992");

var recordString4 = "First Name: " + firstName4 + newLine + "Middle Name: " +
middleName4 + newLine + "Last Name: " + lastName4 + newLine + "Address: " +
address4 + newLine + "Pay Rate: " + payRate4.toString() +newLine + "Hire Date: " +
hireDate4.toLocaleDateString();

console.log(recordString4 + newLine.repeat(2));

var firstName5 = "Wayne";
var middleName5 = "M.";
var lastName5 = "Rooney";
var address5 = "4 Privat Drive";
var payRate5 = 88.70;
var hireDate5 = new Date("October 21, 2017");

var recordString5 = "First Name: " + firstName5 + newLine + "Middle Name: " +
middleName5 + newLine + "Last Name: " + lastName5 + newLine + "Address: " +
address5 + newLine + "Pay Rate: " + payRate5.toString() +newLine + "Hire Date: " +
hireDate5.toLocaleDateString();

console.log(recordString5 + newLine.repeat(2));

// end of program