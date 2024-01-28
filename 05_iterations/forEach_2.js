// const coding = ["java", "javascript", "cpp", "go", "flutter"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//For-each does not return any value while filter returns the value

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

//another method of writing filter, if you are opening up a scope then you have to explicitly 
//mention return

// const newNums = myNums.filter( (nums) => {
//     return nums > 4
// })

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})


//console.log(newNums);

const books = [
    { title: "book one", genre: "fiction", publish: 1992, edition: 2000},
    { title: "book two", genre: "non fiction", publish: 1993, edition: 2001},
    { title: "book three", genre: "fiction", publish: 1994, edition: 2002},
    { title: "book four", genre: "non fiction", publish: 1995, edition: 2003},
    { title: "book five", genre: "science", publish: 1996, edition: 2004},
    { title: "book six", genre: "non fiction", publish: 1997, edition: 2005},
    { title: "book seven", genre: "history", publish: 1998, edition: 2006},
    { title: "book eight", genre: "science", publish: 1999, edition: 2007},
    { title: "book nine", genre: "history", publish: 1998, edition: 2006},
]


let userBooks = books.filter( (bk) => bk.genre === "history")

userBooks = books.filter( (bk) => {return bk.publish > 1996 && bk.genre == "history"})


console.log(userBooks);