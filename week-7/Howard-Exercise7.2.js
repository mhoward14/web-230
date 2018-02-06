var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 7.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 7.2
 24 January 2018

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program
function Employee(id, firstName, lastName, title){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;

}

var employeeArray = [];
employeeArray.push(
    new Employee(1, "Thomas", "Edison", "Software Engineer"), 
    new Employee(2, "Benjamin", "Franklin", "Programmer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Alexander", "Bell", "Business Analyst")
);

employeeArray.forEach(
    function(vale, i, array){
        console.log(array[i].id + " " + array[i].firstName + " " + array[i].lastName
        + " " + array[i].title)
    ;}
)

// end program

