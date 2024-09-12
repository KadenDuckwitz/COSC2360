/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Kaden Duckwitz
      Date: 9/12/24

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
    let currentMenuItem = menuItems[i];

    currentMenuItem.addEventListener("click", calcTotal);
}

function calcTotal() {
    let orderTotal = 0;

    for (let i = 0; i < menuItems.length; i++) {
        let currentMenuItem = menuItems[i];

        if (currentMenuItem.checked) {
            orderTotal += Number(currentMenuItem.value);
        }
    }

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }