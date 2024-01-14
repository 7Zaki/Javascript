const user = {
    username: "Zaki",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Bilal"
user.welcomeMessage()

console.log(this);

function coffee() {
    let userDetail = "Zaki"
    console.log(this);
    console.log(this.userDetail);
}

coffee()

const milk = function() {
    let usersign = "Zaki"
    console.log(this.usersign);
}

const millet = () => {
    let usersign = "Zaki"
    console.log(this.usersign);
    console.log(this);
}


//milk()
//millet()


const addTwo = (num1, num2) => {
    return num1 + num2                  //explicit return arrow function
                                        //curly braces with return
}

console.log(addTwo(2,3));

const addThree = (...num1) => (num1)  //Implicit arrow function
                                      //parenthesis without return

console.log(addThree(1,2,3));


const myObj = () => {name: "Zaki"}
const newObj = () => ({name: "Zaki"})
console.log(myObj());
console.log(newObj());

