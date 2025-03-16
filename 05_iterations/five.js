
/************* for each****************/

const names = ["Tejas", "shubham", "Aayush", "Neelu"];

// is ka simply matlab hai ki forEach is takes a function as a argument and that function is a callback function and that call back function will be run for every array of item

//this is how we write

names.forEach(function (item) {
  // console.log(item)
});

// another way to understand how actullay forEach works

function printName(name) {
  // console.log(name);
}

names.forEach(printName);

//short way to write

// names.forEach((item) => console.log(item));

//array of object scenario

const restaurents = [
    { 
      city: "nashik",
      area: "cidco" 
    },
    { 
      city: "Pimpalner",
      area: "ramnager" 
    },
    { 
      city: "pune",
      area: "talegaon" 
    },
];

restaurents.forEach((item)=>{
// console.log(item.city)
})


// forEach koi bhi value return nhi krta let see in example

const result = restaurents.forEach((item)=>{
  // console.log(item.city)
// return item.city
})

// console.log(result)
