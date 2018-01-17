var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 6.4");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 6.4
 16 January 2018

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

 // stat program

 var ticket = {
     // ticket properties
     id: "ir2136",
     name: "Matthew Howard",
     dateCreated: "18 January 2018",
     priority: "platinum",
     personID: "GOFO2-N4917",
     
     person: {
         //person properties
         id: "N-NC2832",
         firstName: "Sys",
         lastName: "Ad",
         jobTitle: "Client Sys Tech"
         
     }
 };

 var outPutString = "Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " +
     ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").";

 console.log(outPutString);

 //end program