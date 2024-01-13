function one() {
    const username = "Zaki"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}
//one()

//execution happens line by line so if error occurs in first line then codes from
//second lines will not execute

//In case of nested function first outer function will get executed 
//then inner function will get executed


//if (true) {
    const username = "Zaki"
    if (username === "Zaki") {
        const website = " instagram"
    //    console.log(username + website);
    }
    //console.log(website);
//}

//console.log(username);


//++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {         //This is function
    return num + 1             //Can be accessed before the declaring the function
}


addTwo(5)
const addTwo = function(num) {   //This is function expression
    return num + 2               //Cannot be accessed before declaring the function
}








