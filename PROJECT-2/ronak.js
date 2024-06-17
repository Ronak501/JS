const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === "" || isNaN(height) || height < 0){
        results.innerHTML = "Please enter a valid height!";
    }else if(weight === "" || isNaN(weight) || weight < 0){
        results.innerHTML = "Please enter a valid weight!";
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi< 18.6){
            results.innerHTML = `<span>underweight: ${bmi}</span>`;
        }else if(bmi >= 18.6 && bmi < 24.9){
            results.innerHTML = `<span>normal: ${bmi}</span>`;    
        }else if(bmi >= 24.9){
            results.innerHTML = `<span>overweight: ${bmi}</span>`; 
        }
    }
})