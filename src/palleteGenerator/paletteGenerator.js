"use strict";

const colorsContainerElement = document.querySelector(".main");
const newColorButton = document.querySelector(".nav__addNewColor");
const resetColors = document.querySelector(".resetColors");
const colorChildrens = colorsContainerElement.children;

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
    addRemoveBtn(colorsContainerElement.lastElementChild);
  }
}

function addNewColorDiv() {
  const markup = `<div class="main__color color-${
    colorChildrens.length + 1
  }"></div>`;
  colorsContainerElement.insertAdjacentHTML("beforeend", markup);
  const lastChild = colorsContainerElement.lastElementChild;
  lastChild.style.backgroundColor = randomColor();
  addRemoveBtn(lastChild);

  console.log(colorChildrens.length);

  if (colorChildrens.length > 9) {
    newColorButton.style.display = "none";
  }

  [...colorChildrens].forEach((el) => {
    const lockBtn = el.querySelector(".nav__lockColor");
    el.classList.contains("locked")
      ? (lockBtn.innerHTML = `<img src="./svgs/lockClose.svg" />`)
      : (lockBtn.innerHTML = `<img src="./svgs/lockOpen.svg" />`);
  });

  newColorButton.blur();
}

newColorButton.addEventListener("click", addNewColorDiv);

function addRemoveBtn(el) {
  const markup = `
      <button class="nav__removeColor">
        <img src="./svgs/minus.svg" />
      </button>
      <button class="nav__lockColor">
        <img src="./svgs/lockOpen.svg" />
      </button>      
    `;
  el.innerHTML = markup;

  const removeBtn = el.querySelector(".nav__removeColor");
  const lockBtn = el.querySelector(".nav__lockColor");

  let isLocked = false;

  removeBtn.addEventListener("click", function () {
    el.remove();

    if (colorChildrens.length <= 10) {
      newColorButton.style.display = "block";
    }
  });

  lockBtn.addEventListener("click", function () {
    isLocked = !isLocked; // Toggle the locked state
    lockBtn.blur();

    if (isLocked) {
      el.classList.add("locked");
      lockBtn.innerHTML = `<img src="./svgs/lockClose.svg" />`;
      // Add your code for the locked state
    } else {
      el.classList.remove("locked");
      lockBtn.innerHTML = `<img src="./svgs/lockOpen.svg" />`;
      // Add your code for the unlocked state
    }
  });
}

function newRandomColors() {
  [...colorChildrens].forEach((el) => {
    if (!el.classList.contains("locked")) {
      el.style.backgroundColor = randomColor();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 32) {
    newRandomColors();
  }
});

resetColors.addEventListener("click", newRandomColors);

addFiveColorsDivs();
