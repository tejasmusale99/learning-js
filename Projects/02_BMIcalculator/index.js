const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector('#result')
  const info = document.querySelector('#info')

  
  if (height == "" || height < 0 || height == NaN) {
    result.innerHTML = "<h1>Enter Valid height</h1>";
  } else if (weight == "" || weight < 0 || weight == NaN) {
    result.innerHTML = "<h1>Enter Valid wight</h1>";
  }else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    if(bmi < 18.6){
        info.innerHTML = `<h1> ${bmi}  kg/m2 Under Weight</h1>`;   
    }else if(bmi >= 18.6 || resultInfo < 24.9){
        info.innerHTML = `<h1>${bmi}  kg/m2 Normal Range</h1>`;
    }else if(bmi >= 24.9){
        info.innerHTML = `<h1>${bmi} kg/m2 Overweight</h1>`; 
    }
  }
});


