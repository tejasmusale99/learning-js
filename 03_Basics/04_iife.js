/************** Immediately Invoked function expression (IIFE) ***************/

(function chai(){
    //named IIFE
    console.log('DB connected');
})(); 

// ()() IIFE semicolon is compulsory

((name) => {
    console.log(`DB2 connected to this username ${name}`);  
})("tejas");

const result = ((num1, num2)=>{
    console.log("Hello Tejas")
    return num1 + num2;
   
})(10, 10);

console.log(result)



