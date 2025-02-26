/********** Declared String **************/


let name = "tejas"
console.log(name);


/************ Concat String (not goot way to concatinate string)************/
let value =24

console.log("my name is " + name + " and i am " + value + "year old now")

/************ Concat String Using backtick (not goot way to concatinate string)************/

let yourName = "shubham";

let youAge = 27;

console.log(`hello, my name is ${yourName} and i am ${youAge} years old now`)

/********* String Methods **********/

console.log(yourName.length);
console.log(yourName.toUpperCase());
console.log(yourName) //(original value not chnage because of stcak memory)

console.log(yourName.indexOf("u"))
console.log(yourName.charAt(2));

/********** Trim  **********/

let newString = "   Tejas "
console.log(newString)
console.log(newString.trim()) //remove extra spaces
console.log(newString)

/************* Slice Method **************/
let sliceString = "TejasMusale"
console.log(sliceString.slice(0,4)); //piece of cake means start and end value and will get that cake  

console.log(sliceString)

/***************  Replace    *****************/

const url = "https://tejas.com/tejas%20musale"

// In above url %20 is replace is replace by browser mean browser sees that there is space in url and that space is converted into %20

console.log(url.replace("tejas","shubham")) // but supppose we have 2 times tejas name it will replace first tejas and skip second tejas 

/************* ReplaceAll*************/

console.log(url.replaceAll("tejas", "shubham")) //now all tejas words is replace 

/******** Includes (reslut in true or false)*******/


console.log(url.includes("tejas")) //true
console.log(url.includes("teju")) //false

/************* Split {convert to array format} *************/ 
let splitString = "Hello i am tejas"
console.log(typeof splitString)
console.log(splitString.split(""))  //[  'H', 'e', 'l', 'l', ] withous spaces separated with all words like this
  

//with spaces

console.log(splitString.split(" "))  //[ 'Hello', 'i', 'am', 'tejas' ]

//with dash commas remove 
console.log(splitString.split("_")) //[ 'Hello i am tejas' ]