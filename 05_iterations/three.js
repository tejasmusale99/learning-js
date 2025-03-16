/******* for Of loop **********/

const arr = ["tejas", "shubham", "Aayush", "Archit", "Priyansh"]

for (const names of arr) {
    // console.log(names)
} 

/*********** Maps ***********/

const map = new Map()

map.set('IN', "India")
map.set('USA', "united States of America")
map.set('Fr', "France")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':- ', value)
}

/********* object for loop *************/

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

/********* yaha pe forOf loop kam nhi krega (we get myObject is not iterable error)*******/

// for(const [key,value] of myObject){
// console.log(key, value)
// }