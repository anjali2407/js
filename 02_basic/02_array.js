const marbles = ["thor","Ironman","Spiderman"];
const Dc_heroes = ["Spiderman","flash","batman"]
// marbles.push(Dc_heroes)

// console.log(marbles); 
// console.log(marbles[3][1]);

// const all_heroes = marbles.concat(Dc_heroes)
// console.log(all_heroes);

const all_heroes =[...marbles,...Dc_heroes]
console.log(all_heroes);

const another_array = [1,2,,3,[4,5,6],7,[8,[9,10]]] 

const real_another_array = another_array.flat(Infinity) // FLAT FUNCTION PURE ARRAY KO SIMPLIFIED KR DETA H 
console.log(real_another_array);


console.log(Array.isArray("Anjali")) //YEH BATATA H STRING PRESENT H YA NHI
console.log(Array.from("Anjali"))


// **INTERESTING CASE **//
console.log(Array.from({name:"Anjali"})) //YEH EMPTY ARRAY DEGGA ISMEIN BATAN PADEGA KI VALUE CAHIYE YA KEY

let score =100
let score1 =200
let score3 =300
console.log(Array.of(score,score1,score3));