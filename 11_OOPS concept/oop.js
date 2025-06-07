function user(username, logInCount, IsLogIn){
this.username = username,
this.logInCount = logInCount,
this.IsLogIn = IsLogIn

return this;
}



const userOne = new user("Tejas", 11, true)
const userTwo = user("shubham", 12, false)

console.log(userOne);
console.log(userTwo);

