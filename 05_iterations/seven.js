/********** MAP **********/

// returns a new array 

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.map( (num) => num + 10 )

// console.log(newNum);


// using forEach same thing 

const myNewNum = []

myNum.forEach((num)=>{
   const newNum = num + 10;
   myNewNum.push(newNum)
})

// console.log(myNewNum);

/******** Chaining ********/

// means 2 or 3 methods hm sath me use kr skte hai 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// we will do three times chaining one one array 

// hota ye hai ki abhi first time jo hm map lagayenge o to hmare array pe hoga and o array ek new array return krega to agla map usko consider krega naki pichle vale ko awr agla latest vale ko iss tarah se chaining hoga 

const newNums = myNumbers.map( (num) => {
return num *10
})
.map( (num) => {
    return num + 1
})
.filter( (num) => {
return num >= 50
})

console.log(newNums);


