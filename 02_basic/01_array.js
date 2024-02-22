// array

const myArr =[10,1,2,3];
const myHeors =["skati","skatiman"];
const myArr2 =new Array(10,5,29,3,8);
console.log(myArr2);
console.log(myArr[0]);


// ARRAY METHODS


// PUSH-- YEH ARRAY KI END MEIN NUMBER ADD KRTA H
// POP -- YEH ARRAY KI END MEIN JO NUMBER RHTA H USKO REMOVE KRTA H 
myArr.push(6)
console.log(myArr);
myArr.pop();
console.log(myArr);


// unshift -YEH ARRAY KI STARTING MEIN NUMBER ADD KRTA H  .
// SHIFT -- YEH ARRAY KI STARTING MEIN JO BHI 1ST NO H USKO REMOVE KRTA H 
myArr2.unshift(55) 
myArr2.shift()
console.log(myArr2);


console.log((myArr.includes(9)));    //YEH BTATA H ARRAY MEIN VALUE PRESENT H YA NHI 
console.log(myArr.indexOf(9));      // AGR VALUE PRESENT RHTI H TOH USKA INDEX BATATA H OTHER WISE NEGATIVE INDEX BATATA H 

const newArr=myArr.join()
console.log(newArr);
console.log(typeof(newArr));

// slice ,splice 

console.log("A",myArr);  

const myn1 = myArr.slice(0,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(0,3)
console.log(myn2);