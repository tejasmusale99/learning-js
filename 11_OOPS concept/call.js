function setUserName(username){
this.username = username
}


function createUser(username, email, password){
setUserName.call(this,username)
this.email = email,
this.password =  password
}

const tejas = new createUser("tejas", "tejas@gmail.com", "abc123")

console.log(tejas);


// "Jevha mi new createUser() karto, tevha ek navin khaali object create hoto. this ha tyala refer karto. Mag setUserName.call(this, username) madhe mi setUserName la sangtoy ki tu pan haach object use kar. Mhanje username pn tyach object var set hoil. Ani mag email, password pan tya object var set hoil." //

// this = {

// }
