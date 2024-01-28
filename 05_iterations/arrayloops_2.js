const myObject = {
    js: "javascript",
    ts: "typescript",
    cpp: "C++",

}

for (const k in myObject) {
    // console.log(k);
    // console.log(myObject[k]);
    // console.log(`${k} shortcut is for ${myObject[k]}`);
}

const programming = ["js", "ts", "java", "rb"]

for (const key in programming) {
    //console.log(key)
    //console.log(programming[key]);
}




const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}


//conclusion - object forin loop and arrays forof loop