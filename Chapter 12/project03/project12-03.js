"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Kaden Duckwitz
      Date: 11/21/24

      Filename: project12-03.js
*/

$("article > h2").click(function(e) {
    let heading = $(e.currentTarget);
    let list = $(heading.next());
    let headingImage = $(heading.children("img"));

    list.slideToggle(500);
    
    let srcAttrValue = $(headingImage).attr("src");

    if (srcAttrValue == "plus.png") {
        headingImage.attr("src", "minus.png");
    } else {
        headingImage.attr("src", "plus.png");
    }
});