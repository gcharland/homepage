"use strict"

let initKey = 32; // space keyup
let initCounter = 0;

document.addEventListener("keyup", function(event) {
  if (event.keyCode == initKey) {
    initCounter += 1;
    if (initCounter > 3) {
      playGame();
    }
  }
});

function playGame() {
  alert("You pressed space 3 times");
  let clock = document.getElementById("clock");
  clock.innerHTML = "";
}
