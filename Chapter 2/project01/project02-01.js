/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Kaden Duckwitz
      Date: 9/3/24

      Filename: project02-01.js
 */
document.getElementById("cValue").addEventListener("change", function () {
    let cDegree = document.getElementById("cValue").value;
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
});

document.getElementById("fValue").addEventListener("change", function () {
    let fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
});

function CelsiusToFahrenheit(degree) {
    return degree * 1.8 + 32;
}

function FahrenheitToCelsius(degree) {
    return (degree - 32) / 1.8;
}