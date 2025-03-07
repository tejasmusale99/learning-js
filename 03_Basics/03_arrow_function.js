/***************** this inside Object method ******************** */

/*
 const user = {
    userName: "tejas",
    price: 999,
   
    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to Website`)
        console.log(this)
    }
  
 }

 user.welcomeMessage()
console.log("refers to ", this)

*/

/************ this inside function********* */

function addOne(){
    console.log(this)
}

addOne()


/********** this inside function expression *************/

const addTwo = function(){
    console.log(this)
}

addTwo()

/************ this inside arrow function  *************** */

const addThree = () => {
    console.log(this)
}

addThree()

/************ implicit function ******** */


const addFour = (num1, num2) => (num1 + num2)


console.log(addFour(4, 3)) 

