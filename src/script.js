"use strict";

const btnLight = document.querySelector(".btn__light");
const btnDark = document.querySelector(".btn__dark");

const navBtns = document.querySelectorAll(".nav__btn");
const navContainer = document.querySelector(".nav");
const navContent = document.querySelectorAll(".content__tab");

const contactContent = document.querySelector(".content__4");
const projectsContent = document.querySelector(".content__2");

const body = document.querySelector("body");

// Theme mode (dark/light)

function toggleMode(mode) {
  body.classList.remove("lightMode", "darkMode");
  body.classList.add(mode);
}

function setButtonStyle(button, backgroundColor) {
  button.childNodes[1].style.backgroundColor = backgroundColor;
}

btnLight.addEventListener("click", function () {
  toggleMode("lightMode");
  setButtonStyle(btnDark, "");
  setButtonStyle(btnLight, "white");
});

btnDark.addEventListener("click", function () {
  toggleMode("darkMode");
  setButtonStyle(btnDark, "white");
  setButtonStyle(btnLight, "");
});

// console.log((btnDark.childNodes[1].style.backgroundColor = "white"));

const generateContantLinks = function (display) {
  if (contactContent) {
    contactContent.innerHTML = `
    <a href="https://www.instagram.com/iamnicolaescu/?hl=en" target="_blank">
      <img class="logo" src="./src/icons/instagramLogo.svg"/>
      Instagram
    </a>
    <a href="https://www.linkedin.com/in/nicolae-cojocaru-532119233/" target="_blank">
      <img class="logo" src="./src/icons/linkedInLogo.svg"/>
      LinkedIn
    </a>
    <a href="https://github.com/nicolae-co" target="_blank">
      <img class="logo" src="./src/icons/githubLogo.svg"/>
      Github
    </a>
    `;
    contactContent.style.display = display;
  }
};

const generateProjectsLinks = function (display) {
  if (projectsContent) {
    projectsContent.innerHTML = `
      <a href="./src/ticTacToe/ticTacToe.html">Tic Tac Toe</a>
      <a href="">Landing Page</a>
      <a href="">Weather App</a>
      <a href="">Expenses Tracker</a>
    `;
    projectsContent.style.display = display;
  }
};
// Implementing Nav Component
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__btn");
  if (!clicked) return;
  clicked.dataset.nav === "4"
    ? generateContantLinks("flex")
    : generateContantLinks("none");

  clicked.dataset.nav === "2"
    ? generateProjectsLinks("flex")
    : generateProjectsLinks("none");

  // Remove active btn
  navBtns.forEach((b) => b.classList.remove("nav__btn--active"));
  navContent.forEach((c) => c.classList.remove("content__tab--active"));

  // Activate btn
  clicked.classList.add("nav__btn--active");

  // Activate content area
  document
    .querySelector(`.content__${clicked.dataset.nav}`)
    .classList.add("content__tab--active");
});

window.addEventListener("load", function () {
  btnLight.childNodes[1].style.backgroundColor = "white";
});
