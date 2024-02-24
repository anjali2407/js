// const tinderUser = new Object()  // singleton object 
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser);

const regularUser ={
    email :"some@gamil.com",
    fullname : 
    {
        userfulname : {
            firstname : "Anjali",
            lastname : "Nema"
        }
    }
}

// console.log(regularUser.fullname.userfulname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
const  obj3 ={...obj1,...obj2}
// console.log(obj3);


// ***values from data base**

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    }

]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));




// ******DeStructuring of object*******

const course ={
    coursename :"js in hindi",
    price :"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

// const{courseInstructor}=course

// console.log((courseInstructor));


//isko bolte h destructuring of object
const{courseInstructor:Instructor}=course
console.log((Instructor));

// {
//   "  name":"anjali",
//     "coursename":"js",
//    " price": "free"
// }

