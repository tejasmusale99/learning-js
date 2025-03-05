// declaration in object {key:value}

const user1 = {
    name: "Tejas",
    age: 24,
    location: "Nashik",
    email: "tejas.pd@proceeddigital.com"
}

console.log(user1.name);

 //another way to access object value behind the scene the key is string so that's why we write ['eamil'] like this

console.log(user1['email']);
user1.email = "tejasmusale@gmail.com"

//we freez the object now no one change the user1 values

// Object.freeze(user1) 

user1.email = "tejas.elevexdigital@gmail.com"

console.log(user1)

user1.greetings = function(){
    console.log("Hello from user1")
}
user1.greetings2 = function(){
    console.log(`Hello from ${this.name}`)
}

console.log(user1.greetings())
console.log(user1.greetings2()) 