const myObject = {
    js: 'javascript',
    cpp : 'c++', 
    py : 'python'
}

for (const key in myObject) {
//    console.log(key);
// console.log(myObject[key]);
// console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming =["js", "rb","py","java","cpp"]

for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
}


///  ******   for in loop is not applicable in map because it is not iterable.
const map = new Map()
map.set('IN' ,"India")
map.set('USA',"United State of America")

for (const key in map) {
//    console.log(key);
// console.log(map[key]);
}