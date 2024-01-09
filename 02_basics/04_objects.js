// const tinderUser = new Object()    => This is a singleton object

const tinderUser = {}    //=> This is a non singleton object i.e. Object literal

tinderUser.id = "12333"
tinderUser.name = "Zaki"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Zaki",
            lastname: "Naeem"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); 
////console.log(regularUser.fullname?.userfullname.firstname); This is used when we are fetching
// data from API and we are not sure whether "fullname" exist or not


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2}

//console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
//console.log(obj4);

//console.log(obj4===obj1);

//const obj6 = Object.assign({}, obj1, obj2, obj5)
//console.log(obj6);

const obj6 = {...obj1, ...obj2, ...obj5}
console.log(obj6);


const users = [
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    },
    {
        id: 1,
        email: "z@gmail.com"
    }
]


//console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))




















