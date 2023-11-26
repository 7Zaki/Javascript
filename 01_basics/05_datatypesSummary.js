

// Based on how the data is being stored in memory and how it can be accessed,
// Data has been categorized into two categories
// i.e. Primitive and Non primitive/Reference type

// Primitive type data are call by value data means whenever you copy this type
// of data from one place to another, the reference to memory is not given of the data
// instead the copy of the data is provided and whatever changes you make to the data
// is made to the copy.

// Primitive are of 7 types: String, Number, Boolean, null(means empty), undefined, Symbol
// (to make a value unique, especially when you do FE development in advance JS, when you
// are using same component many times and want to differentiate between those components
// so we just wrap that component inside a symbol and it becomes unique), BigInt

// Reference Type/Non Primitive type are those data whose reference are allocated to you.
// Mostly reference types are of three types
// Arrays, Objects and Functions


// JavaScript is a dynamically typed language. This means that variable types are determined 
// at runtime, and you do not need to explicitly declare the type of a variable before 
// using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's 
// type 
// explicitly, and the type checking is done at compile-time, before the code is executed.


const score = 100  // number type
const scorecard = 100.3 // number type
const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined
let userSign = undefined //undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123')  // symbol
console.log(id === anotherId);  // two symbol can never be same even if you pass the same value
//this is the uniqueness of symbol data type. 

const bigNumber = 67126784698479480840834084003840n   //bigInt

const heros = ["Amar", "Akbar", "Anthony"];  // Array

let myObj = {
    name: "Akbar",
    age: 28
};   // Object

const myFunction = function(){
    console.log("Zaki");
};  //Function

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);

// Non primitive datatypes have return type as object
// incase of function it returns function but is called as Function Object

console.log((typeof id));


// JavaScript is a dynamically typed language, which means that data types of variables 
// are determined by the value they hold at runtime and can change throughout the program 
// as we assign different values to them.