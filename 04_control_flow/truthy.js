const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//falsy values

//false, 0, -0, "", BigInt 0n, null, undefined, NaN

//truthy values

//"0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("truthy value");
}


const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;

//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 12
val1 = null ?? 10 ?? 12

console.log(val1);

//because sometimes the function that returns a value comes from a third party application like 
//firebase or appwrite and you never know it will return a null or undefined and you dont
//want to take a null or undefined value in your program so you put a nullish coalescing operator
//and get another function executed to get a flag value
//because if your program has a null or undefined value than it not a good thing because you
//dont know how that null or undefined value has arrived

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 10
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");



