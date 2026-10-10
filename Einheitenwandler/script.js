function convert()
{
    const inputValue = document.getElementById("userInput").value;
    const unit = document.getElementById("unit").value;
    const milesToKm = (unit === "milesToKm");

    let result = 0;
    let resultString = "";

    if (milesToKm) {
        // miles to km
        result = inputValue * 1.60934;
        resultString = inputValue + " Meilen sind " + result + " km";
    } else {
        // km to miles
        result = inputValue / 1.60934;
        resultString = inputValue + " km sind " + result + " Meilen";
    }

    console.log(resultString);

    // show result of equation on the webpage
    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
}
