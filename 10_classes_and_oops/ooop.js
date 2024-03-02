//This is object literal
const user = {
    //These are properties
    username: "Zaki",
    isLoggedIn: true,
    logInCount: 8,

    //This is method
    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);  //this is used in current context
        console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);

//Constructor Function

//const promiseOne = new Promise()
//const date = new Date()

//This new keyword is use to create context and is called constructor Function

function userOne(username, logInCount, isLoggedIn) {
    this.username = username,
    this.logInCount = logInCount,
    this.isLoggedIn = isLoggedIn,

    this.greetings = function() {
        console.log(`Hello ${this.greetings}`);
    }

    return this
}

// const userTwo = userOne("Bilal", 14, true)
// const userThree = userOne("Yusuf", 11, false)
// console.log(userTwo);

//The problem without using new keyword is it overwrites the value
//new keyword creates an instance

const userTwo = new userOne("Bilal", 14, true)
const userThree = new userOne("Yusuf", 11, false)
// console.log(userTwo);
// console.log(userThree);

console.log(userTwo.constructor);

//also read instanceof function of JS from mdn

//1- When you use new keyword an empty object gets created which is called an instance
//2- a constructor function is called because of new keyword and it packs all the arguments into the object
//and handover to you
//3- The resultant object gets added to the this
//4- You get the result









