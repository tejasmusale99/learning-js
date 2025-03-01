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

/********************* MATH  ***********************/

console.log(Math)

console.log(Math.abs(-4)); //means Absolute value

console.log(Math.round(4.6)); //means if value is above 4.6 then it take round off value 5 and for 4.4 it will be 4

console.log(Math.ceil(4.2)) //consider only upper value so o/p is 5(because ceil means higher)
console.log(Math.floor(4.2)) //consider only below value so o/p is 4(because floor means lower)


console.log(Math.min(4,35,5,2,1)) //lowest numer 
console.log(Math.max(4,35,5,2,1)) //highest numer

console.log(Math.random()); //gives values in between 0 to 1

console.log(Math.random()*10); //now it will gives value in between 0 to 10

console.log((Math.random()*10)+1); 

console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)
