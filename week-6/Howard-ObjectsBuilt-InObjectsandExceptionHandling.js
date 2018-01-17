var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 6.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 6.3
 16 January 2018

{id: <ticket id>, name: <ticket name>, requester: <your name>}

*/

// start program

var ticket = {
    id: "ir2136",
    name: "Justin Cepeda",
    requester: "Matthew Howard"
};
console.log("id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester);

// end program