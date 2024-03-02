function multipleby5(num) {
    return num*5
}

multipleby5.power = 3
console.log(multipleby5.power);
console.log(multipleby5.prototype);
//.prototype gives the the prototype properties and this keyword also
console.log(multipleby5(5));


function createUser(username, score) {  //createUser function created
    this.username = username,
    this.score = score
}

createUser.prototype.increment = function() {   //createUser functions object behaviour using prototype
    score++
}

createUser.prototype.printMe = function() {   //createUser functions object behaviour using another prototype
    console.log(`price is ${this.score}`);
}
//Two different users are calling the function, the function will go to the user who has called
//this means jis
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()  //JS will use prototype behind the scenes due to its prototypal ba=ehaviour 
//and need not to be mentioned explicitly

//but to read propeties you need use new keyword because new keyword creates instance

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the 
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't 
return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/







