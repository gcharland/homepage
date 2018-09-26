"use strict"

let input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
  // Cancel the default action
  event.preventDefault();
  // Enter key = 13
  if (event.keyCode == 13) {
    // Trigger the button
    document.getElementById("searchButton").click();
  }
});
