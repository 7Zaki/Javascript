// for of

//["", "", ""]
//[{}, {}, {}]

//const arr = [1,2,3,4,5]

//for (const val of arr) {
    //console.log(val);
//}

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")

//console.log(map);

for (const [k, v] of map) {
    //console.log(k, " => ", v);
}

const myObj = {
    game1: "NFS",
    game2: "spiderman"
}

for (const [k, v] of myObj) {
    console.log(k, " => ", v);
}