/**** for loop syntax *****/

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(i);
}

/**** Nested for loops ****/

for (let i = 0; i <= 10; i++) {
  // console.log(`outer loop value: ${i}`)
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j} and outer loop ${i}`);
  }
}

for (let i = 2; i <= 10; i++) {
  // console.log(`outer value ${i}`);
  for (let j = 2; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

/********* for loop with array ********/

const myArray = ["Tejas", "Shubham", "Aayush", "Nilu"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element)
}

/***********  break and continue *********/

// "break" means nothing will be execute as soon as we encountered on brek loop will break

// continue means we forgive one time(it will not print that value and excute further) and after that loop will continue to work

// for (let i = 1; i <= 20; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`Detected 5`);
//     break
//   }
// console.log(`the value of element is ${element}`)
// }

for (let i = 1; i <= 20; i++) {
  const element = i;
  if (element == 5) {
    console.log(`Detected 5`);
    continue
  }
console.log(`the value of element is ${element}`)
}
