// Syntax of function
//  function -- keyword   sayMyname -- function name

function sayMyname(){
console.log("a");
console.log("n");
console.log("j");
console.log("a");
console.log("l");
console.log("i");
}

// sayMyname -- refernce of function 
// sayMyname () -- execution of function

// sayMyname()


// function addTwono(num1,num2){
//       console.log(num1 + num2); 
// }

// addTwono("4","5")
// addTwono(4,"a");

// function addTwono(num1,num2){
//     let reult = num1+num2
//     return reult
//     console.log("anjali"); // yeh print nhi hogga kyuki return k baad kuch print nhi hota h 
// }
// const reult = addTwono(4,5)
//  console.log("Result is " , reult);


// function loginUserMessage(username="sam")  // sam ko as a default value li h 
// {
//     if(username===undefined)   //if(!undefined)
//     {
//         console.log("pls enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("anjali"));
// console.log(loginUserMessage());  //UNDEFINED VALUE AYEGI 


// function calculateCartPrice(val1,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(2)); // iske liye simple function use hota h

// console.log(calculateCartPrice(200,400,250,300));
//agr sab value ko saath mein print h toh rest(...) operator use hota h

const user ={
    username:"anjali",
    price:200
}
 function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);
 }
//  handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,240, 40,600]));