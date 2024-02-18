const accountId = 2407
let accountEmail ="abc@gmail.com"
var accountPassword ="1234"
accountCity ="jaipur"
let accountState;  // by default js isko undefined leggi.

/*

prefered not to use var -- becaus eof issue in block scope and funtional scope

*/



// accountId = 4207    not allowed
accountEmail ="hc@hc.com"
accountPassword ="21212"
accountCity ="jbp"
console.log(accountEmail); // for printing single variable
 
// for printing all the variable at a time we use table 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);