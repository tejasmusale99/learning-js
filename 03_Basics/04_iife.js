/************** Immediately Invoked function expression (IIFE) ***************/

(function chai(){
    //named IIFE
    console.log('DB connected');
})(); 

// ()() IIFE semicolon is compulsory

((name) => {
    console.log(`DB2 connected to this username ${name}`);  
})("tejas")