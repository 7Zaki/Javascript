const coding = ["java", "javascript", "cpp", "go", "flutter"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

function printMe(val) {
    console.log(val);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arrr) => {
//     console.log(item, index, arrr);
// })


const myCoding = [
    {
        language: "Javascript",
        languageFile: "js"
    },
    {
        language: "typescript",
        languageFile: "ts"
    },
    {
        language: "python",
        languageFile: "py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.language);
})







