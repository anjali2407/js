// const userEmail ="abc@gmail.com"
// const userEmail =""

const userEmail =[]
if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}


// false value --
//             false ,0 , -0 ,BigInt 0n ,"",null,undefined, NaN

//  truthy value -- (string andar kuch bhi aa jye vo truthy value hoti h)
                       
// "0" , 'false' , " ",[],{},function(){}


// if(userEmail.length === 0 )
// {
//     console.log("array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");
}

// Nullish coalescing Operator (?? ):null undefined

let val1;
// val1 = 5??10
// val1 =null??10 // ?? opertaor idar dekhta h ki null k alwa koi aimple value aa skti h ya nhi agr nhi aa skti then null assign kr deta h
// val1 = undefined ??15

val1 = null ?? 10 ?? 5  // ismein jo bhi value 1st assign hoti h vh ati h

console.log(val1);

// ** terniary operator 
// condition ? true :false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")