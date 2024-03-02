// let myName = "Zaki    "
// let myChannel = "Chai      "

// console.log(myName.truelength);

//We want to create a method were by using truelength we can gets actual length of string 
//without using trim function

//console.log(myName.trim().length);  //low iq code

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.zaki = function() {
    console.log("Zaki is present in all objects");
}

// heroPower.zaki()

//myHeroes.zaki()

Array.prototype.heyZaki = function() {
    console.log("Zaki is a coder");
}

//myHeroes.heyZaki()
//heroPower.heyZaki()


//Inheritance

const User = {
    username: "Zaki",
    email: "zaki@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport  //to access the properties of another object
}

teacher.__proto__ = User //Dot method to access the properties of another object

//this is prototypal inheritance
//__proto__ is old method of prototypal inheritance

//Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher)


let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Zaki".trueLength()
"Coditas     ".trueLength()






