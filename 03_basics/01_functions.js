//function sayMyName() {
    //console.log("Z");
    //console.log("A");
    //console.log("K");
    //console.log("I");
//}


//sayMyName

// sayMyName is function reference
// () is function execution

//function addTwoNumbers(number1, number2) {     //number1 and number2 are functions parameters
//   console.log(number1 + number2);              //when you define function definitions
//}

//addTwoNumbers(3, 4)   // 3 and 4 are functions arguments or simply values
//addTwoNumbers(3, "4")
//addTwoNumbers(3, "a")
//addTwoNumbers(3, null)

//const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);

//Function does not return what you print. print means just printing the values it does not
//mean that the function will return the same value that you print. Return is a concept.


function addTwoNumbers(number1, number2) {
    let result = number1 + number2          
    return result                                 //once a function returns a value
    console.log("Zaki");                          //no other code written after return gets executed
}

function addTwoNum(number1, number2) {
    return number1 + number2                       //another way of writing functions
}

const resultNew = addTwoNumbers(3,6)
console.log("Result: ", resultNew);

const resultNyu = addTwoNum(3, 7)
console.log("Result: ", resultNyu);

//function loginUserMessage(username) {
//   if(username === undefined){
        console.log("Please enter a username");
//       return
//   }
//   return `${username} just logged in`
//}

//function loginUserMessage(username) {
//   if(!username) {
//        console.log("Please enter a username");
//        return
//    }
//    return `${username} just logged in`
//}

function loginUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("Zaki"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());




