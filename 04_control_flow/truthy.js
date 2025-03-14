/*************** Falsy values ****************/


// false, 0, -0, BigInt 0n, "", null, undefined, NAN


/*************** Truthy values ****************/

// "0" (because of string truthy), ''false'' (because of string truthy), " " (because od space it is truthy), [], {}, function(){},  


const userEmail = []

if(userEmail.length === 0){
    console.log('array is empty');
    
}else{
    console.log("we have something inside it"); 
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log('Object is empty');    
}

// 0 == false // output true
// 0 === false  // output false

// 1 == true  // output true
// 1 === true   // output false

/************Nullish Coalescing Operator (??): null undefined ***********/
// (check krta hai agar value null or undefined hai first case me to o second value consider krta hai)

let val1;
val1 = 5 ?? 10
console.log(val1)

let val2;
val2 = null ?? 15
console.log(val2)

let val3;
val3 = undefined ?? 20
console.log(val3)


/**************Ternary operator ************/

// syntax = condition ? true : false

let name = "shubham";

(name == "tejas") ? console.log("condition true") : console.log("condition false")