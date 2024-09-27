/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputToConvert = document.getElementById("to-convert-input");
const convertBtn = document.getElementById("convert-btn");
const lengthConversionP = document.getElementById("length-conversion-p");
const volumeConversionP = document.getElementById("volume-conversion-p");
const massConversionP = document.getElementById("mass-conversion-p");


function render(lengthString, volumeString, massString) {
    lengthConversionP.textContent = lengthString;
    volumeConversionP.textContent = volumeString;
    massConversionP.textContent = massString;
}

function convert(input) {
    const massImperial = input * 2.204;
    const lengthImperial = input * 3.281;
    const volumeImperial = input * 0.264;

    const massMetric = 2.204 / input;
    const lengthMetric = 3.281 / input;
    const volumeMetric = 0.264 / input;

    const lengthConversionString = `${input} meters = ${lengthImperial.toFixed(3)} feet | ${input} feet = ${lengthMetric.toFixed(3)} meters`;
    const volumeConversionString = `${input} liters = ${volumeImperial.toFixed(3)} gallons | ${input} gallons = ${volumeMetric.toFixed(3)} liters`;
    const massConversionString = `${input} kilos = ${massImperial.toFixed(3)} pounds | ${input} pounds = ${massMetric.toFixed(3)} kilos`;
    
    render(lengthConversionString, volumeConversionString, massConversionString);
}

convertBtn.addEventListener("click", function() {
    convert(inputToConvert.value);
})
