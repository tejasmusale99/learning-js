const startChangeColorsBtn = document.querySelector('#Start');
const stopChangeColorsBtn = document.querySelector('#stop');

// const stopChangeColorsBtn

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color ="#"
    for(let i=0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let stopInterval;
function startChangingColor(){
    if(!stopInterval){
        stopInterval=setInterval(()=>{
            document.querySelector('body').style.backgroundColor = randomColor();
        },1000)
    }  
}
function stopChangingColor(){
    clearInterval(stopInterval)
    stopInterval = null;
}

startChangeColorsBtn.addEventListener('click', startChangingColor)
stopChangeColorsBtn.addEventListener('click', stopChangingColor)
