"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Kaden Duckwitz
      Date: 10/27/24

      Filename: project09-02b.js
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


riderName.textContent = localStorage.getItem(riderName.id);
ageGroup.textContent = localStorage.getItem(ageGroup.id);
bikeOption.textContent = localStorage.getItem(bikeOption.id);
routeOption.textContent = localStorage.getItem(routeOption.id);
accOption.textContent = localStorage.getItem(accOption.id);
region.textContent = localStorage.getItem(region.id);
miles.textContent = localStorage.getItem(miles.id);
comments.textContent = localStorage.getItem(comments.id);