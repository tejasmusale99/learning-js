class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User Log in with ${this.username}`)
    }
}

// extend nothing but inheriting properrties of user 

class Teacher extends User{
    constructor(username, password, email){
        super(username)
        this.password = password,
        this.email = email  
    }
}
// const tejas = new User('tejas@123')
const teacherTejas = new Teacher("tejas", "@123", "tejas@gmail.com")

console.log(teacherTejas.username)

// console.log(tejas)
// console.log(tejas.logMe())

/* 
=> new keyword creates a new object 
=> it will call constructor 
=> it reffers our new object an that object returns to tejas 

empty object 

this = {

}

filled with

this = {
  this.username = tejas@123
}

returns to tejas now our object look like this 

tejas = {
  this.username = tejas@123
}

const tejas = {
  username: 'tejas@123',
  __proto__: User.prototype
}
What does this.username = username do in the constructor?

It adds a username property to the object with the value 'tejas@123'.

About the logMe method:

It is part of User.prototype.

When you do tejas.logMe, JavaScript looks in the prototype and finds it.

Inside logMe(), this refers to the object that called it, i.e., tejas.

About console.log(tejas.logMe)

This just prints the function definition.

It doesn’t run the function. So this isn’t evaluated here.



*/