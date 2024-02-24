// object 2 ways se bna skte h  -- literals or function se

// literals se objects Singleton NHI bnta h 
// functions se objects Singleton bnta h 


// *****object literals***

//object.create() // yeh functions k through object bnane ka way 

const mySym = Symbol("key1")



const JsUser ={
    name : "Anjali",
    email :"abc@Gmail.com",
    [mySym] : "myKey1",// ** proper way to defined the symbol **//
    age :21 ,
    isLoggedIn : false,
    lastLogindays : ["monday","saturday"],
    "full name ":"Anjali Nema"
}
// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name "]);
// console.log(JsUser[mySym]);

JsUser.email ="chat@gmail.com"  // changing value 
//Object.freeze(JsUser)   //freeze use hota h values ko lock kr di jti h iske baas koi bhi value change nhi hoggi 
JsUser.email ="chatddd@gmail.com"
// console.log(JsUser);

JsUser.greeting =function()
{
    console.log("hello js user");
}

JsUser.greetingtwo =function()
{
    console.log(`hello js user,${this.name}`);
}
 
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
