// ********  IF CONDITION ***

// if(condition){
//     scope
// }

const isUserLoggedIn =true
// const temp =41
// if(temp>50)
// {
//     console.log("hot temp");
// }
// else
// {
// console.log("temp is 41");
// }
// operator --- < ,> ,<= ,>= , == ,!= ,=== ,

// const score=200
// if (score>100) {
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power:${power}`);

// ****short hand notation***

const balance =1000
// if (balance>500) console.log("test");  // implicit scope rhta h ismein

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("it gretaer than 900");
// }


const userLoggedIn =true
const debitCard =true
const userLoggedInfromGoggle =false
const userLoggedInfromEmail =true

// if(userLoggedIn && debitCard && 2==3)
if(userLoggedIn && debitCard && 2==2)
{
    console.log("allowed to buy anything");
}

if (userLoggedInfromGoggle || userLoggedInfromEmail) {
    console.log("user logged in");
}
