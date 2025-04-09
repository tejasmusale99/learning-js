const Allbtns = document.querySelectorAll("button");
const body = document.querySelector('body');

Allbtns.forEach(function(btn){
btn.addEventListener('click',function(e){
// console.log("click")
console.log(e)
if(e.target.id == "box1"){
    body.style.backgroundColor = 'rosybrown'
}
if(e.target.id == "box2"){
    body.style.backgroundColor = 'rgb(222, 72, 72)'
}
if(e.target.id == "box3"){
    body.style.backgroundColor = 'rgb(173, 218, 83)'
}
if(e.target.id == "box4"){
    body.style.backgroundColor = 'rgb(96, 199, 189)'
}
})
})
