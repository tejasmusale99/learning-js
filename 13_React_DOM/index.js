/********** This is how we create element using createElement without React and pass it to the root ****************/

// const h1 = document.createElement('h1');
// h1.innerHTML = "Tejas Musale"

// const root =  document.getElementById("root");
// root.appendChild(h1)
// console.log(h1)


// USing React CDN 

const element = React.createElement("h1",null,"Hello from React");
console.log(element)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)

// console.log(React);
// console.log(ReactDOM);
