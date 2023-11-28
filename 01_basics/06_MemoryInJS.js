// Stack and Heap Memory

// Stack Memory used in Primitive type
// You get a copy of the variable you declare

// Heap Memory used in Non Primitive type
// You get reference to original value

let myYoutubeName = "Zakidotcom"
let anotherName = myYoutubeName

console.log(anotherName);
anotherName = "CoffeeAurCode"
console.log(anotherName);
console.log(myYoutubeName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = user
userTwo.email = "zaki@google.com"

console.log(user.email);
console.log(userTwo.email);






