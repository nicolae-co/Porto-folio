"use strict";
const btnLight = document.querySelector(".btn__light");
const btnDark = document.querySelector(".btn__dark");

const body = document.querySelector("body");

function toggleMode(mode) {
  body.classList.remove("lightMode", "darkMode");
  body.classList.add(mode);
}

btnLight.addEventListener("click", function () {
  toggleMode("lightMode");
  btnDark.childNodes[1].style.backgroundColor = "";
  btnLight.childNodes[1].style.backgroundColor = "white";
});

btnDark.addEventListener("click", function () {
  toggleMode("darkMode");
  btnDark.childNodes[1].style.backgroundColor = "white";
  btnLight.childNodes[1].style.backgroundColor = "";
});

// console.log((btnDark.childNodes[1].style.backgroundColor = "white"));

window.addEventListener("load", function () {
  btnLight.childNodes[1].style.backgroundColor = "white";
});
