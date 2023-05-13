"use strict";

const colorsContainerElement = document.querySelector(".main");
const newColorButton = document.querySelector(".nav__addNewColor");

const markup = `
    <div class="main__color"></div>
    `;

function randomColor() {
  const letters = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    colorHex += letters[randomIndex];
  }
  return colorHex;
}

function addFiveColorsDivs() {
  for (let i = 0; i < 5; i++) {
    const markup = `<div class="main__color color-${i + 1}"></div>`;
    colorsContainerElement.insertAdjacentHTML("beforeend", markup);
    colorsContainerElement.lastElementChild.style.backgroundColor =
      randomColor();
  }
}
function addNewColorDiv() {
  colorsContainerElement.insertAdjacentHTML("beforeend", markup);
  const lastChild = colorsContainerElement.lastElementChild;
  lastChild.classList.add(`color-${colorsContainerElement.children.length}`);
  lastChild.style.backgroundColor = randomColor();
  if ([...colorsContainerElement.children].length > 10)
    newColorButton.style.display = "none";

  addRemoveBtn();
}

newColorButton.addEventListener("click", addNewColorDiv);

function addRemoveBtn() {
  const colorsDiv = [...colorsContainerElement.children];
  const markup = `<button class="nav__removeColor"></button>`;
  colorsDiv.forEach((el) => {
    el.innerHTML = markup;
    const removeBtn = el.querySelector(".nav__removeColor");
    removeBtn.addEventListener("click", function () {
      el.remove();
      if ([...colorsContainerElement.children].length <= 10)
        console.log("test");
      if ([...colorsContainerElement.children].length <= 10)
        newColorButton.style.display = "block";
    });
  });
}

function init() {
  addFiveColorsDivs();
  addRemoveBtn();
}

init();
