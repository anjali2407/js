// FOR OF  ----   ARRAY SPECIFIC LOOP
 
// ["" ,"" ,""] -- array k andar string 
// [{} ,{},{}] --- array k andar object inn object ki value nikalane k liye  kuch loops ka use hota h

const arr =[1,2,3,4,5]
  
/***  for of loop --- kis object mein loop lagana h  ****/
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet);
}


// ** maps *****//
 
const map = new Map()
map.set('IN' ,"India")
map.set('USA',"United State of America")
// map.set('IN' ,"Indiaa")

console.log(map);

// for(const key of map)  --- isse saath mein key or value saath mein print hoti h
for(const [key,value]  of map)
{
    console.log(key,':-',value);
}

const myObject ={
        game1 :'NFS',
        game2 : 'Spiderman'
}

// object k liye yeh iterable nhi hota h
// for (const [key,value] of myObject) {
//     console.log(key ,":-", value);
// }

