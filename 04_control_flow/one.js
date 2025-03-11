/***************** if Statement Syntax *****************/

if(true){
 
}else{

}

/************** Assignment Operator **************/

// < (less than), > (greater than), <= (less than equal to), >= (greater than equal to), == (comparision no strict check), === (strict check), != (not equal to) 

 /******** Nesting *********/

 let balance = 1000;

//  if(balance < 500 ){
// console.log("balance is less than 500");
//  }else if(balance < 750){
//     console.log("balance is less than 750");
//  }else{
//     console.log("balance is less than 1200")
//  }

const userLoggedIn = true
const debitCard = true 

// && (compulsory all value should be true )

if(userLoggedIn && debitCard){
console.log("allow to buy course");
}

// OR (||) (only one value should be true other value false should be acceptable)
const loggedInFromGoogle =true
const loggedInFromEmail =false
const loggedInFromYahoo =false

if(loggedInFromEmail || loggedInFromYahoo || loggedInFromGoogle ){
    console.log("allow to buy course");
    }

 