"use strict";
const btnLight = document.querySelector(".btn__light");
const btnDark = document.querySelector(".btn__dark");

const navBtns = document.querySelectorAll(".nav__btn");
const navContainer = document.querySelector(".nav");
const navContent = document.querySelectorAll(".content__tab");

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

// Implementing Nav Component
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__btn");
  if (!clicked) return;

  // Remove active btn
  navBtns.forEach((b) => b.classList.remove("nav__btn--active"));
  navContent.forEach((c) => c.classList.remove("content__tab--active"));

  // Activate btn
  clicked.classList.add("nav__btn--active");

  // Activate content area
  document
    .querySelector(`.content__${clicked.dataset.nav}`)
    .classList.add("content__tab--active");

  console.log("test");
});

window.addEventListener("load", function () {
  btnLight.childNodes[1].style.backgroundColor = "white";
});
