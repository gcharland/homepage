"use strict"

function prettyTime(val) {
  if (val < "10") {
    val = "0" + val;
  }
  return val;
}

function displayTime() {
  let date = new Date(); // Returns the date
  let y, m, d, h, mm, s, now, today;

  y = date.getYear() + 1900;;
  m = prettyTime(date.getMonth());
  d = prettyTime(date.getDay());

  h = date.getHours();
  mm = prettyTime(date.getMinutes());
  s = prettyTime(date.getSeconds());

  today = `${y}/${m}/${d}`;
  now = `${h}:${mm}:${s}`;

  document.getElementById('clock').innerHTML = `<h1>${today}</h1></br><h3>${now}</h3>`;
}

function duckDuck(input) {
  //alert(input);
  let newString = input.replace(/ /g, "+");
  return newString;
}

function buttonClick() {
  let searchQuery = duckDuck(document.getElementById("search").value);
  let newURL;

  if (searchQuery == "") {
    newURL = "https://duckduckgo.com/";
  } else {
    newURL = `https://duckduckgo.com/?q=${searchQuery}`;
  }

  document.location.href = newURL;

}

displayTime();
window.setInterval(function(){displayTime()}, 1000);
