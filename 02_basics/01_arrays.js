// array

// () => Parenthesis
// [] => Brackets
// {} => Braces/Curly

// shallow copies - Heap memory 
// array is a non primitive data type so it creates shallow copies when you create copy 
// operations
// deep copies - Stack memory

const myArr = [1,2,3,4,5]
const myHeros = ["sak", "ska", "sum"]
const anArray = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods

myArr.push(8)
console.log(myArr);
myArr.push(9)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(6)
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(8));


const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myNa = myArr.slice(1,3)

console.log(myNa);
console.log("B ", myArr);

const mySna = (myArr.splice(0,3))
console.log(mySna);
console.log("C ", myArr);









