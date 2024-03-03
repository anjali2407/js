for (let i = 0; i < 10; i++) {
    const element = i;
    
    if(i==5)
    {
    //    console.log(`5 is the best number`);
    }//console.log(i);
}

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop : ${i}`);

    for (let j = 0; j < 10; j++) {
    //  console.log(`*******inner loop : ${j}`);
    // console.log(i + `*` + j + ` = ` + i*j);
        
    }
}

let myArray =["flash" ,"batman" ,"superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//***** BREAK AND CONTINUE ******//

for (let i = 0; i < 20; i++) {
   console.log(`value of i is  ${i}`);
    if(i==10)
    continue;
    // else if(i==15)
    // break;

}