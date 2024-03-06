class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        //return this._password.toUpperCase()
        return `${this._password}zaki`
    }

    //if you are defining getter method then setter should also be defined

    set password (value) {       
        this._password = value  //we never return value in setter
    }    
}

//value is the value of password we get from the gettter
//we are assigning _password in place of password so that both 
//constructor and set method does not get in rat race of setting the 
//password and the call stack gets full


const zaki = new User("zaki", "123")
console.log(zaki.password);
console.log(zaki.email);