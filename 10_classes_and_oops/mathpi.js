const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") 

//console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("code fatt gya");
    }
}

//console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
//     writable: false,
     enumerable: false,
     configurable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }                     
//some objects are iterable and some are not depending on situation
//there is another method to iterate the object if it is not iterable

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
    
}