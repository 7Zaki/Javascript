//let a = 10
//const b = 20
//var c = 30

//curly braces when comes with if-else or function is known as scope 
//but not with object since it is for object declaration

//var c = 300
let a = 200
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    //var c = 30
    //c = 30    //the code written inside {} in if statement is block scope 
}             //and the code written outside of if is called as global scope

//The value that you write in global scope is available inside block scope
//but the value that you write in block scope is not available outside of block scope
//i.e. in global scope

console.log(a);
//console.log(b);
//console.log(c);

//In browser scope is different than the global scope in node environment
