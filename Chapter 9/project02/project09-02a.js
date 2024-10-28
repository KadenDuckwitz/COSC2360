"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Kaden Duckwitz
      Date: 10/27/24

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

document.getElementById("submitButton").onclick = showData;

function showData() {
    localStorage.setItem(riderName.id, riderName.value);
    localStorage.setItem(ageGroup.id, ageGroup.value);
    localStorage.setItem(bikeOption.id, bikeOption.value);
    localStorage.setItem(routeOption.id, routeOption.value);
    localStorage.setItem(accOption.id, accOption.value);
    localStorage.setItem(region.id, region.value);
    localStorage.setItem(miles.id, miles.value);
    localStorage.setItem(comments.id, comments.value);

    location.href = "project09-02b.html";
}