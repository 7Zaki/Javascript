function setUserName(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 123)
console.log(chai);

//setUserName is gettig called but as soon as the function is called. its execution
//context is leaving the call stack. what is required is we need to hold the reference of 
//that function. The method that is used to hold the reference is Dot call (.call)

