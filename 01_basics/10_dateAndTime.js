// Dates

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('en-IN'));

let newDate = Date()
console.log(typeof newDate);

let myCreatedDate = new Date(2023, 0, 23, 15, 3, 5)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString('en-IN'));

let anotherDate = new Date('13-2-2023')
console.log(typeof anotherDate);
console.log(anotherDate.toDateString());

let aDate = new Date('2023-01-02')
console.log(aDate.toDateString());

let myTime = Date.now()
console.log(myTime);
console.log(aDate.getTime());
console.log(Math.floor(myTime/1000));
console.log((Math.floor(aDate.getTime()/1000)));


let bDate = new Date()
console.log(bDate);
console.log(bDate.getMonth());

console.log(`${bDate.getMonth()} and the time is ${myTime}`);

console.log(bDate.toLocaleString('default', {
    weekday: "long"
}));

console.log(bDate.toLocaleString('en-IN', {
    weekday: "short"
}));