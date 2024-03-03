const coding =["java","cp","ruby","python"]

// for each mein ek callback function dete h
// call back function hota h --- function (item) {}
// function name() {} --- yeh original funtion h  isse agr  name alg kr de or () iske kuch bhi de addEventListener,b,c ,item 
// toh array k values ko indicate krta h 


// coding.forEach(  function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

function printMe(item){
    // console.log(item);
}
//  coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding =[
    {
        languageName :"javascript",
        languageFileName:"js"
    },
    {
        languageName :"cpp",
        languageFileName:"c++"
    },
    {
        languageName :"python",
        languageFileName:"py"
    }
]
 
// array se uske object ki value print krne ka tarika
myCoding.forEach((item) => {
    console.log(item.languageName);
})