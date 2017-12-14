var header = required('..header.js')

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
    function match() {    
    }

    function logMismatch() {
    }

    function logMatch() {
    }

    // six (6) test varibles



    // Output from the match() function...
    console.log(match("A", "B"));
    console.log(match(2, 2));


    // Conditional "if...else" statements. Include checks for all six (6) test variables
    if (age == 35) {
        console.log(match("Welcome!"));
    } 
    else {
        console.log(mismatch("Come again some other time."));
    }
    if (username == Matthew Howard) {
        console.log(match("Authorized."));
    }
    else {
        console.log(mismatch("Access denied!"));
    }
    if (address == home) {
        console.log(match("Please list the name of the city."));
    }
    else {
        console.log(mismatch("Please list a valid mailing address."));
    }
    if (n==1) {
        console.log(match("You have 1 new message."));
    {
    else {
        console.log(mismatch("You have " + n + " new messages."));
    }
    if (vehicle == make) {
        console.log(match("Please list the model."));
    }
    else {
        concole.log(mismatch("Please list the type of vehicle you own."));
    }
    if (sport == soccer) {
        console.log(match("What team do you support?"));
    }
    else {
        console.log(mismatch("Please list your favoirte soccer team."));
    }

    // end program