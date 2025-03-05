// const tinderUser = new Object() //object

const tinderUser = {};

tinderUser.id = "0025";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false; 

// console.log(tinderUser)

/********* NESTED OBJECT**********/

const firstUser = {
  email: "firstuser@gmail.com",
  name: "firstUser",
  user2: {
    email: "firstuser2@gmail.com",
    name: "firstUser2",
    user3:{
        email: "firstuser3@gmail.com",
        name: "firstUser3",
    }
  },
};

console.log(firstUser.user2.user3.email)

// merge two arrays (spread operator) 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const mergeTwoObj = {...obj1, ...obj2}

console.log(mergeTwoObj);


/************ Arrays object ************/

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
  
]

console.log(users[1].email);

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));



