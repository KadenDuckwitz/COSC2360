"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Kaden Duckwitz
      Date: 11/21/24

      Filename: project12-01.js
*/

$(() => {
    $("li.submenu")
    .mouseover(function(e) {
        $(e.currentTarget).children("ul").show();
    })
    .mouseout(function(e) {
        $(e.currentTarget).children("ul").hide();
    });
});