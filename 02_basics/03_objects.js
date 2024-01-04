// There are two ways to declare objects i.e. by literal or by constructor

// When you create object with constructor it creates singleton object
// Object.create //Constructor method

// When you create object with literal it does not create singleton object. it is also called 
// object literals.

//object literals

const mySym = Symbol("Keys1")

const JsUser = {
    name: "Zaki",
    "full name": "Mohammad Zaki Naeem",
    [mySym]: "keys1",
    age: 18,
    location: "Pune" ,
    email: "zaki@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "zaki@yahoo.com"

// Object.freeze(JsUser)

JsUser.email = "zaki@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());