//control flow or logic flow

//if
//if(condition) {
    //this code will get executed if the condition is true
    //and if the condition is false this code will not get executed
//}

//if (true) {
    //this code will get executed
//}

//if (false) {
    //this code will not get executed
//}

const isUserLoggedIn = true

//if (isUserLoggedIn) {

//}

// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// = assignment operator
// == equality operator
// != not equal to
// === strict equal (both value and data types are checked)
// !== strict not equal to 

if (2 == "2") {
    console.log("executed");
}

const temperature = 21

if (temperature > 30) {
    console.log("greater than 30");
} else {
    console.log("less than 30");
}

console.log("Executed");


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

const balance = 1000
//if (balance > 500) console.log("test"),
//console.log("test2");   //implicit scope

//implicit scope can also be written in multiple lines by putting commas
//but it is not a good practice from the point of view of code readability

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && ampersand

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}