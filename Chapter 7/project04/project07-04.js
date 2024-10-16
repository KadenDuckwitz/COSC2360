"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Kaden Duckwitz
      Date: 10/15/24

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");
let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");
let status = document.getElementById("status");

generateCustomerList();

addButton.addEventListener("click", function() {
    let customerNameValue = customerName.value;

    customers.push(customerNameValue);
    generateCustomerList();

    status.textContent = customerNameValue + " added to the end of the queue";
});

searchButton.addEventListener("click", function() {
    let customerNameValue = customerName.value;
    let place = customers.indexOf(customerNameValue) + 1;

    if (place == 0) {
        status.textContent = customerNameValue + " is not found in the queue"
    } else {
        status.textContent = customerNameValue + " found in position " + place + " of the queue";
    }
});

removeButton.addEventListener("click", function () {
    let customerNameValue = customerName.value;
    let index = customers.indexOf(customerNameValue);

    if (index !== -1) {
        customers.splice(index, 1);

        status.textContent = customerNameValue + " removed from the queue";

        generateCustomerList();
    } else {
        status.textContent = customerNameValue + " is not found in the queue";
    }
});

topButton.addEventListener("click", function() {
    let topCustomer = customers.shift();
    status.textContent = topCustomer + " from the queue";

    generateCustomerList();
});

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");  
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}