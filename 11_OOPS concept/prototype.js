let myPower = ["coading"]   //array 
  
let heroPower = {           //obejct
   thor: "hammer",
   spider: "sling",
    
   getSpiderPower: function(){
    console.log(`spidy power is ${this.spider}`)
   }
}

// heroPower.getSpiderPower()

Object.prototype.tejas = function(){
    console.log("tejas is present in all object");
    
}

function greet() {}
greet.tejas(); // function 


heroPower.tejas()
myPower.tejas()


// So if you add a method to Object.prototype, it becomes available to all instances of these types.