const inputValue = 10;
const milesToKm = true;

let result = 0;

if (milesToKm) {
    // miles to km
    result = inputValue * 1.60934;
} else {
    // km to miles
    result = inputValue / 1.60934;
}

const resultString = inputValue + " Meilen sind " + result + " km";

console.log(resultString);

// show result of equation on the webpage
const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;
