const User = {
    _email: "zaki@coffee.com",
    _password: "1234",


    get email() {
        return this._email.toUpperCase()   
    },

    set email(value) {
        this._email = value
    }
}

//Object.create is factory function
//new is contructor function

const tea = Object.create(User)
console.log(tea.email);   //email is not a method but a property for tea so it does not 
                          //bother how the email is stored inside the property email
                          //whether it is in the form of _email or email.