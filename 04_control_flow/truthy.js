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

