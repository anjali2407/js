//  DATES 

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("04-27-2002") //MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());


// Time stamp -- quiz varega mein time dene k liye use hota h 
let myTimeStamp = Date.now()
// console.log(myTimeStamp); //miliseconds mein answer ata h 

// console.log(myCreatedDate.getTime()); 

// miliseconds ko convert krne k 2 ways--

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // months 0 se start hota h 
// console.log(newDate.getDate());

// `${newDate.getDate()}`

// customization of localeString

newDate.toLocaleString('default', {
    weekday:"long"
}
)
console.log(newDate);