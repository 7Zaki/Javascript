const str = "str"
const str1 = String(1)
const str2 = String('Zakia')
const str3 = new String(`Zaki`)

// console.log(typeof str);
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);

const name = "Zaki"
const repoValue = 50

// console.log(name + repoValue + " Value"); // outdated method of writing strings

console.log(`Hello my name is ${name} and my repo count is ${repoValue}`); // new method of 
// writing strings

const bookName = new String('hiteshhc')

console.log(bookName[0]);
console.log(bookName.__proto__);
console.log(bookName.__proto__.charAt(0));
console.log(bookName.charAt(0));
console.log(bookName.length);
console.log(bookName.toUpperCase());
console.log(bookName.__proto__.toUpperCase());
console.log(bookName.indexOf('l'));

const newString = bookName.substring(-5, 1)
console.log(newString);

const anotherString = bookName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     zaki     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zaki.com/zaki%20naeem"

const urlOne = url.replace('%20', '-')
console.log(urlOne);

const urlIncludes = url.includes('sundar')
console.log(url.includes('true'));

const newWord = new String('Zaki-com-naeem')
console.log(newWord.split('-'));
