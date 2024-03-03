class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {    //static stops the method from being accessed by any object
        return `123`
    }
}

const zaki = new User("zaki")

//console.log(zaki.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
}

const iPhone = new Teacher("iphone", "i@phone.com")

iPhone.logMe()
console.log(iPhone.createId())