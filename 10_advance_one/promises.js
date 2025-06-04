
// const newPromise = new Promise(function(resolve,rej){
//     setTimeout(function(){
//         console.log("async task")
//         resolve()
//     },1000)   
// });


// newPromise.then(function(){
//     console.log("promise consumed");
// })

// const proinseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("tejas")
//     },1000)
// }).then(function(name){
// console.log(name)
// })

const promiseThree = new Promise(function(resolve,reject){
    let error = false;
    if(!error){
        setTimeout(function(){
            resolve("tejas")
        },1000)
    }else{
        reject('something went wrong')
    }
})

async function consumeThreePromise(){ 
try{
    const response = await promiseThree
    console.log(response);
}catch(err){
console.log(err);
}
}

consumeThreePromise()




