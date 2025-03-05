/************ Arrays (Object)***************/ 

// const arr = ["tejas", 24, "Bachelor's Of Engineering", "Mechanical Department", true];

// console.log(typeof arr)  //Object

// console.log(arr[0]);

// console.log(arr.length);
 
// New way to declare arr 

// const newArr = new Array("tejas", "musale", 24, true)

// console.log(newArr[0]);


/****************** ARRAYS METHOD ******************/

// const arr = ["tejas", 24, "Bachelor's Of Engineering", "Mechanical Department", true];

/*****************Push( Add element from last of array)*****************/
// arr.push(5)


/**************Pop (Remove element from last of array)************ */

//  arr.pop()
 
 /************** Unshift ( insert element at first) ************/

//  arr.unshift(5);

 /************* Includes (result in boolean find means ask question) *************/

//  console.log( arr.includes("tejas")); //true

 /************* IndexOff (find index of element in array if not found result -1) *************/

// console.log(arr.indexOf(24)); 

/********* join (convert to string data type and seprate with comma) **********/

// const newArray = arr.join()

// console.log(arr);
// console.log(typeof arr);
// console.log(newArray); 
// console.log(typeof newArray); 

/************ Slice ***************/

const myArray = [ 0,1,2,3,4,5,6]

console.log("original Array", myArray);

console.log("Slice Result ", myArray.slice(1,3));

console.log("is it change original Array? No", myArray);

/****************Splice***********************/

console.log(myArray.splice(1,3))

console.log("is splice change original array? Yes", myArray)


