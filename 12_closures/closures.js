function outer(){
    const name = "tejas";
     function inner(){
        console.log(name)
    }

    return inner;
}

console.log(outer());
 