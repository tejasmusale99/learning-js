// var c = 30;

// console.log(c);

// {
//     var a = 10;
 
// }
 
// console.log(a);
// function blockCheck() {
//   var a = 10;
//   console.log(a);
// }

// blockCheck();

// console.log(b);


/*********** Closures *************/

const parentScope = "global"

function parent(){
  console.log(parentScope)
  const username = "tejas"

  function child(){
    const tutor = "hitesh sir"
    console.log(username)
  }

  // console.log(tutor)
  child()

}

// parent()


/************** function expression ***************/


const addTwo = function(num){
  return num + 1;
}

console.log(addTwo(5))

