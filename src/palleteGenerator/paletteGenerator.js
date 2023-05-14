"use strict";

const colorsContainerElement = document.querySelector(".main");
const newColorButton = document.querySelector(".nav__addNewColor");

const colorChildrens = colorsContainerElement.children;

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
  addRemoveBtn();
}
function addNewColorDiv() {
  colorsContainerElement.insertAdjacentHTML("beforeend", markup);
  const lastChild = colorsContainerElement.lastElementChild;
  lastChild.classList.add(`color-${colorChildrens.length}`);
  lastChild.style.backgroundColor = randomColor();
  if ([...colorChildrens].length > 10) newColorButton.style.display = "none";
  addRemoveBtn();

  [...colorChildrens].forEach((el) => {
    const lockBtn = el.querySelector(".nav__lockColor");
    el.classList.contains("locked")
      ? (lockBtn.textContent = "Unlock")
      : (lockBtn.textContent = "Lock");
  });

  newColorButton.blur();
}

newColorButton.addEventListener("click", addNewColorDiv);

function addRemoveBtn() {
  const colorsDiv = [...colorChildrens];
  const markup = `
  <button class="nav__removeColor"></button>
  <button class="nav__lockColor">Lock</button>`;
  colorsDiv.forEach((el) => {
    el.innerHTML = markup;

    const removeBtn = el.querySelector(".nav__removeColor");
    const lockBtn = el.querySelector(".nav__lockColor");

    let isLocked = false;

    removeBtn.addEventListener("click", function () {
      el.remove();
      if ([...colorChildrens].length <= 10) console.log("test");
      if ([...colorChildrens].length <= 10)
        newColorButton.style.display = "block";
    });

    lockBtn.addEventListener("click", function () {
      isLocked = !isLocked; // Toggle the locked state
      lockBtn.blur();

      if (isLocked) {
        el.classList.add("locked");
        lockBtn.textContent = "Unlock";
        // Add your code for the locked state
      } else {
        el.classList.remove("locked");
        lockBtn.textContent = "Lock";
        // Add your code for the unlocked state
      }
    });
  });
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 32) {
    [...colorChildrens].forEach((el) => {
      if (!el.classList.contains("locked"))
        el.style.backgroundColor = randomColor();
    });
  }
});

function init() {
  addFiveColorsDivs();
}

init();
