const accountId = 71633
let accountEmail = "zaki@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"

// accountId = 5 // not allowed
accountEmail = "alfas@google.com"
accountPassword = "121212"
accountCity = "Leh"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])