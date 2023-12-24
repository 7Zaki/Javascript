let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  //This Number guarantees that score has been converted into number

console.log(typeof valueInNumber);

let scoreA = "33abc"

console.log(typeof scoreA);
console.log(typeof (scoreA));

let valueInNumberA = Number(scoreA)

console.log(typeof valueInNumberA);
console.log(valueInNumberA);

let scoreB = null

console.log(typeof scoreB);
console.log(typeof (scoreB));

let valueInNumberB = Number(scoreB)

console.log(typeof valueInNumberB);
console.log(valueInNumberB);

let scoreC = undefined

console.log(typeof scoreC);
console.log(typeof (scoreC));

let valueInNumberC = Number(scoreC)

console.log(typeof valueInNumberC);
console.log(valueInNumberC);

let scoreD = false

console.log(typeof scoreD);
console.log(typeof (scoreD));

let valueInNumberD = Number(scoreD)

console.log(typeof valueInNumberD);
console.log(valueInNumberD);

let scoreE = "Zaki"

console.log(typeof scoreE);
console.log(typeof (scoreE));

let valueInNumberE = Number(scoreE)

console.log(typeof valueInNumberE);
console.log(valueInNumberE);

// "33" => 33
// "33abc" => NaN
// true => 1 false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let toConvert = ""

let converted = Boolean(toConvert)
console.log(converted);

let toConvertA = "Zaki"

let convertedA = Boolean(toConvertA)
console.log(convertedA);

// 1 => true
// 0 => false
// "" => false
// "Zaki" => true

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber);


// **************************Operations********************************

let value = 3
let negValue = -value 
console.log(negValue);

// console.log(2+2) addition
// console.log(2-2) substraction
// console.log(2*2) multiply
// console.log(2**3) to the power
// console.log(2/3) divide quotient
// console.log(2%3) divide remainder

let str1 = "hello"
let str2 = " Zaki"
let str3 = str1 + str2 
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2)
console.log(1 + 2 + "2");

console.log(true)
console.log(+true)

console.log(+"");

let gameCounter = 100
gameCounter++ 
console.log(gameCounter);
++gameCounter
console.log((gameCounter));

// Prefix and postfix increment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3
const y = x++
console.log(y);

let xx = 3
const yy = ++xx 
console.log(yy);




















