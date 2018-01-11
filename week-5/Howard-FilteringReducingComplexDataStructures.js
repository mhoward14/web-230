var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 5.4");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 5.4
 8 January 2018

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

var famousComposers = [
    {
        lastName: "Mozart", 
        genre: "Classical", 
        rating: 10,
    },
    {
        lastName: "Beethoven", 
        genre: "Classical", 
        rating: 8,
    },
    {
        lastName: "Bach", 
        genre: "Classical", 
        rating: 9,
    },
    {
        lastName: "Haydn", 
        genre: "Classical", 
        rating: 6,
    },
    {
        lastName: "Schubert", 
        genre: "Classical", 
        rating: 5,
    }
]

var composersByRating = famousComposers.map(function(composer) {
    var ratingObject = { rating: composer.rating, lastName: composer.lastName }
    return ratingObject;
});

var composersByGenre = famousComposers.map(function(composer) {
    var genreObject = { genre: composer.genre, lastName: composer.lastName }
    return genreObject;
});

console.log("-- COMPOSER BY RATING --");

composersByRating.forEach(function(ratingObject){
    
    console.log("Rating: " + ratingObject.rating);

    console.log("Composer: " + ratingObject.lastName + "\n");

});

console.log("-- COMPOSER BY GENRE --");

composersByGenre.forEach(function(genreObject){
    
    console.log("Genre: " + genreObject.genre);

    console.log("Composer: " + genreObject.lastName + "\n");
    
});

// end program