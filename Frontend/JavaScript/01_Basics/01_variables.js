const accountId = 144553
let accountEmail = "shivamsh66606@gmail.com"
var accountPassword = "12345"
accountCity = "Mathura"
let accountState;

// accountId = 2 not allowed //

accountEmail = "rajputshivam@gmail.com"
accountPassword = "87363"
accountCity = "Kanpur"

/*
Prefer not to use var because of issue in block scope and functional scope
const - use for constent
var - use for changable variable
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])