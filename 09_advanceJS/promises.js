//Promises are mostly consumed but before knowing how to consume promises we should know
//how to create promises


//Below is the promise we have created
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task like, DB calls, cryptography, network calls
    setTimeout(function() {
        console.log("Async task is complete");
        resolve() //this connects it with the .then
    }, 1000)
})

//Now we are consuming above promise

promiseOne.then(function() {                //.then connection is with resolve
    console.log("Promise is complete");
})    


//Second method of doing the resolve part of promise

new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)
    
}).then(function() {
    console.log("Promise 2 is completed");
})

//Creating Third Promise
const PromiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Zaki", email: "zaki@example.com"});
    }, 1000)
})

PromiseThree.then(function(user) {
    console.log(user);  //whatever data is passed in the resolve can be accessed as 
})


//Creating Fourth Promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"Java", email: "java@example.com"});
        } else {
            reject("ERROR; Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((myUsername) => {
    console.log(myUsername);
}).catch(function(myError) {
    console.log(myError);
}).finally(() => console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject) {[
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: "Javascript", email:"javascript@example.com"})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
]})

// async function consumePromiseFive() {
//     const response = await promiseFive    //it does not handle erroe gracefully
//     console.log(response);                //directly gives error
// }


async function consumePromiseFive() {       //try and catch handles error gracefully.
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}

getAllUsers()

//Doing the above fetch with .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})