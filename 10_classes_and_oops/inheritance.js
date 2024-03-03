class User {
    constructor(username) {
        this.username = username            //constructor
    }

    logMe () {
        console.log(`USERNAME is ${this.username}`);    //method
    }
}

class Teacher extends User{         //extends inherit all the properties of user to teacher
    constructor(username, email, password) {
        super(username)         //behind the scene super works like the combination of this and call
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}    


const chai = new Teacher("chai", "chai@example.com", 123)

chai.addCourse()

const masalaChai = new User("masalachai")

//masalaChai.addCourse()  no access of teacher properties to user

masalaChai.logMe()
chai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);