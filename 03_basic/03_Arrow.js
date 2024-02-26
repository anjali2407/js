// arrow function samjhne k liye   "THIS " samjhana padega and "THIS" k liye object samjhana padega 

// this --> content context k bare mein batata h

const user={
    username:"anjali",
    price: 999,

    welcomemessage : function()
    {
        console.log(`${this.username} ,welcome to website`);
    //console.log(this)
    }
    
}
// user.welcomemessage()
// user.username= "Sam";
// user.welcomemessage()

// console.log(this)
// yeh empty value deta aisa isliye hota kyuki phle sb browser mein js ko print krte the toh uske andar "WINDOW" object hota h
// but aap  empty object ho gya h 


// function chai(){
//     let username="anjali"
//     console.log(this.username);
// }
// chai()

// const chai = function()
// {
//     let username="anjali"
//     console.log(this.username);
// }
// chai()


// *****  ARROW FUNCTION **//
const chai = () =>
{
    let username="anjali"
    console.log(this.username);
}
// chai()


// ****** arrow function ko  2 ways se return kr skte h ***

// *** 1st ---EXPLICIT RETURN -- ismein return word use hota h
// const addTwo=(num1,num2)=>{
//     return num1 +num2
// }

//**  2nd  -- IMPLICIT RETURN  -- ismein bina return keyword k return krte h
// const addTwo=(num1,num2)=> num1 +num2
// const addTwo=(num1,num2)=> (num1 +num2)

const addTwo=(num1,num2)=> ({username:"anjali"})


console.log(addTwo(3,4));
