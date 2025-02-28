/*

we will get a data Type (typeOf) "number" for this 
const score = 100; //output 100

*/

// another way to declared 

const score = new Number(100); 

console.log(score); //output [Number:100]

// using new keyword we will surely get data type as a number 

console.log(score.toString()) //now the number is converted into String now we can use string method too 

console.log(score.toString().length)
console.log(score.toFixed(2));  //generally used in ecommerse app to put zero on the last (100.00)

const otherNumber = 32.3599

console.log(otherNumber.toPrecision(3)) //closer value round off



