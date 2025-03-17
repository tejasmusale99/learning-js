/************reduce ***********/

let myArray = [1, 2, 3, 4, 5];

// const newArray = myArray.reduce((acc, curr) => {
//   console.log(`acc: ${acc} and curr: ${curr}`);
//   return acc + curr;
// }, 1);

// console.log(newArray);


// one more example 

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "React Course",
        price: 3999
    },
    {
        itemName: "system design Course",
        price: 4999
    }
]

const totalCartVal = shoppingCart.reduce((acc, currItem)=>{
    return acc + currItem.price
},0)

console.log(totalCartVal)
/*******************************/