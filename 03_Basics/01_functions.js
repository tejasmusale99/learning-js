/***********  function Declaration**************/ 

// function sayMyNum(){
//     console.log("T");
//     console.log("E");
//     console.log("J");
//     console.log("A");
//     console.log("S"); 
// }

// sayMyNum()

/*********** perform function **************/ 

// function addTwoNum(parameter1,parameter2){
//     console.log(parameter1 + parameter2)
// }

// Now Pass arguments to function 

// addTwoNum(5,5) 

/*********** Return function **************/ 

/*

function addNum(num1, num2) {
    let result = num1 + num2;
    return result;
    console.log("tejas") 
}
//never execute this line bec after return function stop working

 const result = addNum(10, 10)

console.log(result)

 */

/********** multiple arguments (Rest Operator)************/

function calculateCartPrice(...price){
return price
}

// console.log( calculateCartPrice([200, 400, 500, 1000]) );

/***************** Pass Objects in function *******************/
const user={
    username : "Tejas",
    price: 99
}


function handleObjects(anyObject){
console.log(anyObject.username)
}

// handleObjects(user)

/************ Pass Arrays In function ************ */

const newUser = ["tejas", 24, 56]

function handleArray(getArray){
return getArray[1]
}

console.log(handleArray(newUser))

