/*
1 meter = 3.281 feet
1 liter = 0.263 gallon
1 kilogram = 2.204 pound
*/
let button = document.getElementById("convert-btn")
let inputNumber = document.getElementById("number-btn")
let lengthP = document.getElementById("length-paragraph")
let volumeP = document.getElementById("volume-paragraph")
let massP = document.getElementById("mass-paragraph")

button.addEventListener("click", function() {
    let userNumber = inputNumber.value
    animateButtonClick(button)
    lengthConvert(userNumber)
    volumeConvert(userNumber)
    massConvert(userNumber)
})


function lengthConvert(userNumber) {
    let feet = userNumber * .3048
    let meters = userNumber * 3.28084
    lengthP.textContent = `
    ${userNumber} meters = ${meters.toFixed(3)} feet |
    ${userNumber} feet = ${feet.toFixed(3)} meters
    `
}

function volumeConvert(userNumber) {
    let liters = userNumber * 0.264172
    let gallons = userNumber * 3.78541
    volumeP.textContent = `
    ${userNumber} liters = ${liters.toFixed(3)} gallons |
    ${userNumber} gallons = ${gallons.toFixed(3)} liters
    `
}

function massConvert(userNumber) {
    let kilos = userNumber * 2.20462
    let pounds = userNumber * 0.453592
    massP.textContent = `
    ${userNumber} kilos = ${kilos.toFixed(3)} pounds |
    ${userNumber} pounds = ${pounds.toFixed(3)} kilos
    `
}

function animateButtonClick(button) {
    const start = performance.now();
    const duration = 100; // animation duration in milliseconds

    function animate(time) {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);

        button.style.transform = `scale(${1 - progress * 0.1})`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            button.style.transform = '';
        }
    }

    requestAnimationFrame(animate);
}
