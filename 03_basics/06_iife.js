//Immediately Invoked Function expression
//it is used to prevent global scope pollution
//to immediately execute a function

//function chai() {
//    console.log("DB CONNECTED");
//}

//chai()

(function coffee() {
    //named iife
    console.log("DB CONNECTED");
})();               //iife function

//Syntax for iife
// (Function definition)(Execution); semi colon is to end the context of the iife

( (name) => {
    //unnamed iife or simply iife
    console.log(`DB CONNECTED by ${name}`);
})("Zaki")