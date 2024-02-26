// let a=10;
// const b=20;
// var c=30;
 
// yeh simple way h
// console.log(a);
// console.log(b);
// console.log(c);

// varibale ko kisi loop ya function mein print krwate h uss time problem ati h
// for example   ismein a and b scope k andar defined h isliye print nhi hue but var locally bhi print 
// ho jta h isliye var ko avoid kiya jata h 

// if(true)
// {
//     let a=10;
//     const b=20;
//     var c=30;
//     console.log("INNER: ",b)  // agr kisi inner value ko print krwana h toh 
// }
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username ="anjali"
    function two() {
        const website  ="youtube"
        console.log(username);
    }
    //  console.log(website);
    // two()
    //basic of closure -- child function apne parents function k variable ko use kr skte h
}
// one()

if(true)
{
    const username ="anjali"
    if(username==="anjali")
    {
        const website =" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ************ intersting *********
addone(5)
function addone(num) {
    return num + 1
}


addtwo(5) // this is basically a concept of hosting where we host any thing
// IDAR PER FUNCTION KO EK VARIABLE NE HOLD KR K RKHA H ISLIYE ERROR AAI 
const addtwo = function(num){
    return num+2
}
