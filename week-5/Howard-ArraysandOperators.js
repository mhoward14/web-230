var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 5.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 5.3
 8 January 2018

 -- COMPOSERS --
 Last Name: Beethover, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Calssical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

 // start program

 var famousComposers = [

    {
        firstName: "Wolfgang",
        lastName: "Mozart", 
        genre: "Classical", 
        rating: 10,
    },
    {
        firstName: "Ludwig",
        lastName: "Beethoven", 
        genre: "Classical", 
        rating: 8,
    },
    {
        firstName: "Johann",
        lastName: "Bach", 
        genre: "Classsical", 
        rating: 9,
    },
    {
        firstName: "Joseph",
        lastName: "Haydn", 
        genre: "Classical", 
        rating: 6,
    },
    {
        firstName: "Franz",
        lastName: "Schubert", 
        genre: "Classical", 
        rating: 5,
    }
]

famousComposers.forEach(function(composer){
    console.log("First Name: " + composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
});

