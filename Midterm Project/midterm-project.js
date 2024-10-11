"use strict";
/*

MIDTERM PROJECT
Name: Kaden Duckwitz
Date: 10/10/24
Course Name: COSC 2360 NT

*/

// Global variables
let total;
let toppings = document.getElementsByClassName("topping");
let crusts = document.getElementById("crust-select");
let cardType = document.getElementById("card-type");
let cardNumber = document.getElementById("card-number");
let cvc = document.getElementById("cvc");
let submitButton = document.getElementById("submit");

// Event listeners
window.addEventListener("load", initializeSite);

for (let i = 0; i < toppings.length; i++) {
    let currentToppingCheckbox = toppings[i];
    currentToppingCheckbox.addEventListener("click", updateTotal);
}

crusts.addEventListener("blur", updateTotal);
submitButton.addEventListener("click", validatePayment);

// Functions
function initializeSite() {
    for (let i = 0; i < toppings.length; i++) {
        let currentToppingCheckbox = toppings[i];
        currentToppingCheckbox.checked = false;
    }

    crusts.selectedIndex = 0;
    total = 0;
    cardType.selectedIndex = 0;
    cardNumber.value = "";
    cvc.value = "";
}

function updateTotal() {
    total = 0;

    for (let i = 0; i < toppings.length; i++) {
        let currentToppingCheckbox = toppings[i];
        let currentToppingValue = Number(currentToppingCheckbox.value);

        if (currentToppingCheckbox.checked) {
            total += currentToppingValue;
        }
    }

    let crustSelected = crusts.options[crusts.selectedIndex];
    let crustValue = Number(crustSelected.value);

    total += crustValue;

    let totalCost = document.getElementById("total-cost");
    let costFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    totalCost.textContent = 'Total Cost: ' + costFormat.format(total);
}

function validatePayment() {
    let isCardNumberValid = true;

    let cardNumberValue = cardNumber.value;
    let cardNumberCasted = Number(cardNumberValue);

    if (cardNumberValue === "") {
        cardNumber.setCustomValidity("Please enter a card number!");
        cardNumber.style.backgroundColor = "red";
        isCardNumberValid = false;
    } else if (isNaN(cardNumberCasted)) {
        cardNumber.setCustomValidity("A card number must only contain numerical values!");
        cardNumber.style.backgroundColor = "red";
        isCardNumberValid = false;
    } else if (cardNumberValue.length > 19) {
        cardNumber.setCustomValidity("This card number appears to be too long!");
        cardNumber.style.backgroundColor = "red";
        isCardNumberValid = false;
    } else if (cardNumberValue.length < 8) {
        cardNumber.setCustomValidity("This card number appears to be too short!");
        cardNumber.style.backgroundColor = "red";
        isCardNumberValid = false;
    } else {
        cardNumber.setCustomValidity("");
        cardNumber.style.backgroundColor = "white";
        isCardNumberValid = true;
    }

    let isCVCValid = true;

    let cvcNumber = cvc.value;
    let cvcNumberCasted = Number(cvcNumber);

    if (cvcNumber === "") {
        cvc.setCustomValidity("Please enter a CVC!");
        cvc.style.backgroundColor = "red";
        isCVCValid = false;
    } else if (isNaN(cvcNumberCasted)) {
        cvc.setCustomValidity("A CVC must only contain numerical values!");
        cvc.style.backgroundColor = "red";
        isCVCValid = false;
    } else if (cvcNumber.length !== 3) {
        cvc.setCustomValidity("This CVC is not 3 digits long!");
        cvc.style.backgroundColor = "red";
        isCVCValid = false;
    } else {
        cvc.setCustomValidity("");
        cvc.style.backgroundColor = "white";
        isCVCValid = true;
    }

    let isPaymentValid = isCVCValid && isCardNumberValid;
    console.log(isPaymentValid);

    if (isPaymentValid) {
        window.open("submit.html");
    }
}