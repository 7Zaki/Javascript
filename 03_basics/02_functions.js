function calculateCartPrice(...num1) {
    return num1
}

//three dots are called as rest operator and spread operator
//depending on the use cases it is defined when it should be called as rest operator 
//and when it should be called as spread operator

console.log(calculateCartPrice(200, 300, 400));

function calculateShoppingCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateShoppingCartPrice(200, 300, 400, 500, 600));


const user = {
    username: "Zaki",
    prices: 122
}


function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "Yusuf",
    price: 201
})

const myArray = [123, 456, 789, 912]

function returnSecondValue(anyArray) {
    return anyArray[1]
}


console.log(returnSecondValue(myArray));
console.log(returnSecondValue([1,2,3,4,5,6]));





