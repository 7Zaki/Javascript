// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1)
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and comparisions >, <, >= and <= work differently
Comparisions convert null to a number, treating it as 0
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict equality check compares both values and datatype
// while == equality check only compares values because conversion happens of data types